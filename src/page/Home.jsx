import React from 'react'
import Hero from '../component/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBlog from '../component/AddBlog'
import SingleBlog from '../component/SingleBlog'
import EditBlog from '../component/EditBlog'
export default function Home() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route element={<Hero/>} path='/'/>
          <Route element={<AddBlog/>} path='/addblog'/>
          <Route element={<SingleBlog/>} path='/singleblog/:id'/>
          <Route element={<EditBlog/>} path='/editblog/:id'/>
       
        </Routes>
      </BrowserRouter>
    </div>
  )
}

