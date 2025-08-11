import { PenSquareIcon, Trash2Icon } from 'lucide-react'

import { Link } from "react-router-dom"
import {toast} from "react-hot-toast"
import api from "../lib/axios"

export default function NoteCard({note, setNotes}) {

  const handleDelete= async(e, id)=>{
    e.preventDefault();
    if(!window.confirm("Are you sure you want to delete this note?")){
      return ;
    }
    try{
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      setNotes((prev)=> prev.filter((note)=> note._id!== id )) //to get rid of the deleted note
    }
    catch(err){
      console.log("Error in deleting the note", err);
      toast.error("Failed to delete the note");
    }
  }
  return (
    <>
    <Link to={`/note/${note._id}`} className="p-4 sm:p-5 md:p-6 card bg-base-100 border-t-4 h-60 w-90 hover:shadow-xl transition-all duration-200 border-solid border-[#00FF9D]" >
      <div className="card-body bg-base-500 shadow-2xl w-90">
        <h2 className="card-title text-md font-bold md:text-lg">{note.title} </h2>
        <p className='text-base-content/80 text-md md:text-lg'>{note.content} </p>
        <div className="card-actions flex justify-between items-center">
           <span className='text-base-content/60'>{note.createdAt.slice(0,10)} </span> 
           <div className="flex items-center gap-1">
            <PenSquareIcon className='size-5'/> 
            <button className='btn btn-ghost btn-xs text-error' onClick={(e)=> handleDelete(e,note._id)}><Trash2Icon className='size-5'/> </button>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}


