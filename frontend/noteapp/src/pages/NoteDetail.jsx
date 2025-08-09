import { ArrowLeftIcon, Loader2, Loader2Icon, LoaderIcon, Trash2 } from 'lucide-react'
import React, { useState , useEffect} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import api from "../lib/axios"
import toast from 'react-hot-toast'

export default function NoteDetail() {
  const navigate= useNavigate();
  const [note, setNote]= useState({title: "", content: ""});
  const [loading, setLoading]= useState(true);
  const [saving, setSaving]= useState(false);

   const {id} = useParams();
  
  useEffect(()=>{
   const fetchNote= async()=>{
    try{
      const res= await api.get(`/notes/${id}`);
      setNote(res.data);
      
    }
    catch(err){
      console.log(err);
      toast.error("Failed to fetch the note");
    }
    finally{
      setLoading(false);
    }
   }
   fetchNote();
  }, [id]);

  console.log({note});

  const handleDelete= async()=>{
    if(!window.confirm("Are you sure you want to delete this note?")){
      return;
    }
       try{
         await api.delete(`/notes/${id}`);
         toast.success("Note deleted successfully");
         navigate("/");
       }
       catch(error){
          toast.error("Failed to delete note");
       }
  }

  const handleSave = async ()=>{
  
    if(!note.title || !note.content){
      toast.error("All fields are required");
      return;
    }
    setSaving(true);
    try{
    console.log("Sending update for note:", id, {
      title: note.title,
      content: note.content
    });
      const res= await api.put(`/notes/${id}`, {
         title: note.title,
        content: note.content
      });
      console.log("Backend update response:", res.data);
      if(res.status === 200){
        toast.success("Note updated successfully");
        navigate("/");
      }
      else{
         toast.error("update request failed");
      }
    }
    catch(err){
      console.log(err);
      toast.error("Error in updating note");
    }
    finally{
      setSaving(false);
    }
  }
  if(loading){
    return(
      <div className='min-h-screen bg-base-200 max-w-[1180px] sm:p-6 md:p-10 p-4 flex justify-center items-center'>
        <LoaderIcon className='size-10 animate-spin'/>
      </div>
    )
  }
  return (
    
    <section className='min-h-screen bg-base-200 max-w-[1180px] sm:p-6 md:p-10 p-4'>
   <div className='max-w-2xl mx-auto container'>

    {/* Upper section */}
     <div className='max-w-2xl flex justify-between items-center mx-auto'>
        <Link to="/" className='btn btn-ghost'><ArrowLeftIcon className='size-5'/> <p>Back to Notes</p></Link>
        <button onClick={handleDelete} className='btn btn-outline btn-error py-3 flex items-center gap-2' type="submit"><Trash2 className='size-5'/><p>Delete Note</p></button>
    </div>

    {/* Form section */}
    
    <div className='w-full max-w-sm bg-base-content/10  md:max-w-lg xl:max-w-xl mx-auto mt-5 rounded-lg p-4'>
      
      <fieldset className='fieldset space-y-4'>
        <legend className="fieldset-legend md:text-xl sm:text-sm font-bold text-center">
          Note details
        </legend>
        <label className='label size-5'>Title</label>
        <input type="text" value={note.title} onChange={(e)=> setNote({...note, title: e.target.value})} className='input w-full text-base sm:text-sm' ></input>
       
        <label className='label'>Content</label>
        <textarea type="text" value={note.content} onChange={(e)=> setNote({...note, content: e.target.value})} className='textarea w-full h-40 text-base sm:text-sm resize-none' > </textarea>
      </fieldset>

      <div className="card-actions flex justify-end">
        <button className='btn btn-primary mt-2 sm:mx-auto' onClick={handleSave} type="submit" disabled={saving}>
          {saving? <>
          <Loader2 className='animate-spin w-5 h-5'/> "Saving"
          </> : "Save Changes"}
        </button>
      </div>
    </div>
    {/* form ends here */}
    </div>

    </section>
  )
  
}
