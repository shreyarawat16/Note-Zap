import { NotebookIcon } from 'lucide-react'
import React from 'react'
import {Link} from "react-router"
export default function NotesNotFound() {
  return (
    
      <div className="card-body flex flex-col justify-center items-center gap-y-5 mx-auto text-center py-16">
        <div className='bg-primary/20 rounded-full p-5'>
        <NotebookIcon className='size-10 text-primary'/>
        </div>
        <h2 className="card-title text-xl font-bold">Notes not found</h2>
        <p className='bg-base-100 max-w-80 text-center text-base-content/70'>Ready to organize your thoughts? Create your first note to get started on your journey</p>
        <Link to="/create" className='btn btn-primary'>Create your first note </Link>

      </div>
    
  )
}

