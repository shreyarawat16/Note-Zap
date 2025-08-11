import React, { useEffect, useState } from 'react'
import axios from "axios";
import {ArrowLeftIcon} from "lucide-react";
import {Link, useNavigate} from "react-router"
import {toast} from "react-hot-toast";
import api from "../lib/axios"


export default function Create (){
  const navigate= useNavigate();
  const [title, setTitle]= useState("");
  const [content, setContent]= useState("");
  const [loading, setLoading]= useState(false);

 const handleSubmit= async (e)=>{
  e.preventDefault();
  if(!title || !content){
    toast.error("All fields are required");
    return;
  }
  setLoading(true);
  try{
    const res= await api.post("/notes", {
      title, content
    });
    toast.success("Note created successfully");
    navigate("/");
    
  }
  catch(err){
    console.log("Error creating note", err);
    if(err.response.status == 429){
      toast.error("Slow down!You're creating notes too fast",{ duration: 4000, icon: "" ,})
    }
    else{
    toast.error("Failed to create note");
    }
  }
  finally{
    setLoading(false);
  }
 }
// const handleChange=(e)=>{
//   setFormData(
//     {...formData, [e.target.name]: e.target.value}
//   )
// }
 
  return (
    <div className='bg-base-200 min-h-screen flex justify-center items-center h-screen p-4 sm:p-6 md:p-10'>
    
    <form onSubmit={handleSubmit}  className='mt-10 bg-base-content/10 w-100 p-4 max-w-lg sm:p-6 md:p-8 rounded-xl shadow-lg'>
       <div className=''><Link to="/" className="btn btn-ghost"><ArrowLeftIcon className='size-5'/><p>Back to notes</p></Link> </div>
       <div className="card-body ">
       <h2 className='card-title font-bold text-center text-lg md:text-xl lg:text-2xl'>Create New Note</h2>
       <fieldset className='fieldset space-y-4'>
         <legend className='fieldset-legend text-lg sm:text-sm'>Title</legend>
         <input value={title} onChange={(e)=> setTitle(e.target.value)} type='text' placeholder='Title' className='input input-ghost w-full text-sm md:text-md'></input>
       
        <legend className="fieldset-legend text-lg sm:text-sm sm:mt-4">Content</legend>
        <textarea value={content} onChange={(e)=> setContent(e.target.value)} className="text-sm md:text-md textarea textarea-ghost h-40 w-full resize-none" placeholder='Write your content here'></textarea>
        
       </fieldset>

       <div className="actions text-center mt-2">
        <button className="btn btn-primary text-base sm:text-md" type="submit" disabled={loading}>
          {loading ? "Creating... " : "Create Note"}
          </button>
       </div>
      </div>
    </form>
    </div>
  )
}
