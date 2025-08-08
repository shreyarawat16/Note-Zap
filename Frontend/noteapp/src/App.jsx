import React from 'react'
import {Route, Routes } from 'react-router'
import Home from "./pages/Home.jsx"
import Create from "./pages/Create.jsx"
import NoteDetail from "./pages/NoteDetail.jsx"
import toast from "react-hot-toast"

export default function App(){
  return (
    <div data-theme="forest" className='relative h-full w-full'>
      
      <Routes>
        <Route path="/" element={<Home/>}>  </Route>
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/note/:id" element={<NoteDetail/>} > </Route>
      </Routes>
      </div>

    
   )
}
