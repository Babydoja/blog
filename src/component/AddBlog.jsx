import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
const URL = 'https://blogbackend-1-11nd.onrender.com'

export default function AddBlog() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [img, setimg] = useState('')
    const [content, setContent] = useState('')

    const navigate = useNavigate()

    const addBlog = async (e) => {
        const payload ={
            title,
            author,
            img,
            content
        }
        e.preventDefault();
        try {
            const response = await axios.post(`${URL}/create_blog` , payload)
            console.log("Blog added successfully" , response.data);
            toast.success('New blog added successfully')
            navigate('/')
        } catch (error) {
            console.error("Error adding blog:", error);
            toast.error('Error adding blog')
        }
        setAuthor('')
        setTitle('')
        setContent('')
        setimg('')
  };

  return (
    <div className='min-h-[100vh] bg-[#000000e5]'>
    <Header/>
        <div className=''>
            <div className=' flex justify-center items-center mt-2 h-[80vh] flex-col text-center'>
                <h1 className='text-[30px] font-bold  text-white'>Add Blog</h1>
                <form onSubmit={addBlog}>
                    <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title} className='border border-black w-96 p-2 mt-2 rounded'  /> <br />
                    <input type="text" placeholder="Author" onChange={(e)=>setAuthor(e.target.value)} value={author} className='border border-black w-96 p-2 mt-2 rounded' /> <br />
                    <input type="text" placeholder="Img" onChange={(e)=>setimg(e.target.value)} value={img} className='border border-black w-96 p-2 mt-2 rounded'/> <br />
                    <textarea  placeholder="Content" onChange={(e)=>setContent(e.target.value)} value={content} className='border border-black w-96 p-2 mt-2 rounded' /> <br />
                    <button className='bg-red-600 w-96 p-2 mt-2 rounded text-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
