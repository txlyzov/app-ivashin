const HSC = require('http-status-codes');
const { notesService } = require('../../services/index');

module.exports = {

  createNote(req,res){
    notesService.createNote(req);

    return res.sendStatus(HSC.OK);
  },
  getNotes(req,res){
    return res.json(notesService.getNotes(req));
  },
  getOneNote(req,res){
    return res.json(notesService.getOneNote(req));
  },
  updateNote(req,res){
    notesService.updateNote(req);

    return res.sendStatus(HSC.OK);
  },
  async deleteNote(req,res){
    notesService.deleteNote(req);
    return res.sendStatus(HSC.OK);
  }
};
