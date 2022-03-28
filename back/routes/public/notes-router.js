var express = require('express');

var router = express.Router();
const HSC = require('http-status-codes');
const { notesController } = require('../../controllers/index');

router.post(
  '/create',
  (req,res)=>{
    return notesController.createNote(req,res);
  },
);
router.get(
  '/get',
  (req,res)=>{
    return notesController.getNotes(req,res);
  },
);
router.get(
  '/get/:id',
  (req,res)=>{
    return notesController.getOneNote(req,res);
  },
);
router.put(
  '/update/:id',
  (req,res)=>{
    return notesController.updateNote(req,res);
  },
);

router.delete(
    '/delete/:id',
    async (req,res)=>{
      return notesController.deleteNote(req,res);
    },
);

module.exports = router;
