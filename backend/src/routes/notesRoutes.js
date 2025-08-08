import express from "express";
const router= express.Router();
import { getAllNotes, getNoteById ,createNote , updateNote, deleteNote } from '../controller/notesController.js'

//INDEX ROUTE
router.get("/", getAllNotes);

router.get("/:id", getNoteById);
//Create route
router.post("/", createNote);

//Update route
router.put("/:id", updateNote);

//Delete route
router.delete("/:id", deleteNote);

export default router;