import React from 'react'
import {Link} from 'react-router'
import {PlusIcon} from 'lucide-react'

const Navbar = () => {
  return(
    <header className="sm:min-w-[640px] navbar bg-base-300 shadow-sm border-base-content max-w-[1180px]" >
        <div className="flex justify-between items-center w-11/12 mx-auto">
            {/* LEFT PART */}
             
                <h1 className="text-xl font-bold text-primary tracking-light">Note Keeper</h1>
             
             {/* RIGHT PART */}
             <button className="btn btn-primary">
                <Link to="/create" className="flex items-center justify-between gap-4"><PlusIcon className="size-5"/>
                <span>New Note</span>
                </Link>

             </button>
        </div>
    </header>
  )
  
}

export default Navbar
