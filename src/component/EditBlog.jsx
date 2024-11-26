import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from './Header'
import axios from 'axios'
const URL = ' http://localhost:5000'


export default function EditBlog() {
  const [img, setimg] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()
  const getSingleData = async() =>{
      try {
        const response = await axios.get(`${URL}/getsingle_blog/${id}`)
        if (response) {
          setAuthor(response.data.author)
          setContent(response.data.content)
          setTitle(response.data.title)
          setimg(response.data.img)
        } else {
          console.log("No such document!");
          
        }
      } catch (error) {
        console.error('Error fetching')
      }
  }
  useEffect(() => {
    getSingleData()
  }, [id])

  const editblog = async (e) =>{
    e.preventDefault()
    try {
        const response =await axios.put(`${URL}/edit_blog/${id}` ,{
          img,
          author,
          title,
          content,
        })
        console.log(response);
        toast.success('Blog Updated Successfully')
        navigate('/')
    } catch (error) {
      console.error('error')
      toast.error('Blog not updated')
    }
    
  }
  return (
    <div className='min-h-[100vh] bg-[#000000e5]'>
      <Header/>
        <div className=''>
            <div className=' flex justify-center items-center mt-2 h-[100vh] flex-col text-center '>
                <h1 className='text-[30px] font-bold text-white'>Edit Blog</h1>
                <form onSubmit={editblog}>
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
