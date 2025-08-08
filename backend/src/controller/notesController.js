import Note from '../models/Note.js'

export async function getAllNotes(req,res){
    try{
        const allNotes= await Note.find().sort({createdAt: -1}); //-1 will sort in descending order, newest first
        res.status(200).json(allNotes);
    }
    catch(err){
        console.error("Error in getAllNotes controller", err);
      res.status(500).json({message: "Internal server error"});
    }
}

export async function getNoteById(req, res){
    try{
    let {id}= req.params;
    const note =await Note.findById(id);
    if(!note) return res.status(404).json({message: "Note not found"});
    res.json(note);
    }
    catch(err){
        console.log("Error in getNoteById controller",err);
        res.status(500).json({message: "Internal server error"})
    }
}
export async function createNote(req, res){
    try{
        const {title, content} = req.body;
        const newNote= new Note({
            title: title,
            content: content,
            
        })
        const savedNote= await newNote.save();
        res.status(201).json(savedNote);
    }
    catch(err){
         console.log("Error in create Note", err);
         res.status(500).json({message: "Internal server error"});
    }
}

export async function updateNote(req,res){
    try{
    const {title, content}= req.body;
    const {id}= req.params;
    const updatedNote= await Note.findByIdAndUpdate(id, {title, content}, {new: true});
    if(!updatedNote) return res.status(404).json({message: "Note not found"});
    res.status(200).json(updatedNote);
    }
    catch(err){
        console.log("Error in update Note controller", err);
        res.status(500).json({message: "Internal Server error"});
    }
}

export async function deleteNote(req,res){
    try{
    let {id}= req.params;
    const deletedNote= await Note.findByIdAndDelete(id);
    if(!deletedNote) return res.status(404).json({message: "Note not found"});
    res.json(deletedNote);
    }
    catch(err){
        console.log("Error in delete Note controller",err);
        res.status(500).json({message: "Internal server error"});
    }
}