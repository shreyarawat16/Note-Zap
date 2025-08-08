import mongoose from "mongoose"

//1. you need to create a schema
//2. you would model based off of the schema

const notesSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    content:{
       type: String,
       required: true,
     },
    
    
}, {timestamps: true} //createdAt, updatedAt
);

const Note= mongoose.model("Note", notesSchema);
export default Note;