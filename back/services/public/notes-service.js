const HSC = require('http-status-codes');

const fs = require('fs');
const path = require('path');
const JSONdata = require('./../../json/data.json')

function saveData(note){

  fs.writeFileSync('json/data.json',JSON.stringify(note), (err)=> {
    if (err){
      console.log(err);
    }
  })
};

function readData(){
  const result = fs.readFileSync('json/data.json');

  return JSON.parse(result);
}

module.exports = {
  createNote(req){
    const {message, hashtags} = req.body;
    const note = {
      message,
      hashtags
    }
    const existData = readData();
    existData.push(note);
    saveData(existData);
  },

  getNotes(req){
    const searchCondition =  req.query.searchCondition;
    const data = readData();

    if(!searchCondition){
      return data;
    }

    let searchResult = [];
    
    data.forEach(note => {
      note.hashtags.every(hashtag =>{
        if(hashtag.match(new RegExp(searchCondition, 'gim'))){
          searchResult.push(note);

          return false
        }

        return true;
      })
    });

    return searchResult;
  },

  getOneNote(req,res){
    return readData()[req.params.id];
  },

  updateNote(req,res){
    const {message, hashtags} = req.body;
    const id = req.params.id;
    let data = readData();
    data[id] = {message,hashtags};
    saveData(data)
  },

  deleteNote(req,res){
    const id = req.params.id;
    let data = readData();
    data.splice(id, 1);
    saveData(data)
  },
};
