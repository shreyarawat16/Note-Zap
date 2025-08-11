import { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import RateLimit from "../components/RateLimit"
import axios from "axios"
import {toast} from "react-hot-toast"
import NoteCard from '../components/NoteCard'
import api from "../lib/axios"
import NotesNotFound from '../components/NotesNotFound'

export default function Home () {
   const [isRateLimited, setIsRateLimited]= useState(false);
   const [notes, setNotes]= useState([]);
   const [loading, setLoading]= useState(true);

   useEffect(()=>{
     const fetchNotes= async()=>{
        try{
            let res = await api.get("/notes");
            console.log(res.data);
            setNotes(res.data);
            setIsRateLimited(false);
            
        }
        catch(err){
           console.log("Error fetching notes",err);
           
           if(err.response?.status == 429){
            setIsRateLimited(true);
           }
           else{
            toast.error("Failed to load notes");
           }
        }
        finally{
          setLoading(false);
        }
     }
     fetchNotes();
   },[])
  return (
    <div className="min-h-screen">
      <Navbar/>
      {isRateLimited && <RateLimit/>}
      <section className="mx-auto max-w-[1180px] sm:min-w-[500px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        {loading && 
          <div className="text-primary text-center py-10"> loading notes..</div>
        }
        {notes.length==0 && !isRateLimited && <NotesNotFound/>}
        {notes.length >0 && !isRateLimited &&
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:flex flex-col justify-center">
                  {notes.map(note=>{
                    return(
                     <NoteCard note={note} key={note._id} setNotes={setNotes}/>
                 ) })}       
         </div>}
      </section>
    </div>
  )
}
