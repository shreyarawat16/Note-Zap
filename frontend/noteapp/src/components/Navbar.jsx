import React from 'react'
import {Link} from 'react-router'
import {PlusIcon} from 'lucide-react'

const Navbar = () => {
  return(
    <header className="min-w-[450px] navbar bg-base-300 shadow-sm border-base-content w-full max-w-[1180px] mx-auto" >
        <div className="flex justify-between items-center w-11/12 mx-auto">
            {/* LEFT PART */}
             
                <h1 className="md:text-xl sm:text-md font-bold text-primary tracking-light">Note Keeper</h1>
             
             {/* RIGHT PART */}
             <button className="btn btn-primary">
                <Link to="/create" className="flex items-center justify-between gap-4"><PlusIcon className="md:size-5 sm:size-3"/>
                <span className='text-sm md:text-base'>New Note</span>
                </Link>

             </button>
        </div>
    </header>
  )
  
}

export default Navbar
