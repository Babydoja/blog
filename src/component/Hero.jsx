import React, { useEffect, useState } from 'react'
// import { URL } from '../App'
import axios from 'axios'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
const URL = 'https://blogbackend-1-11nd.onrender.com'



export default function Hero() {
  const [data, setData] = useState([])
  const {id} = useParams()
  const getAllBlog =async () => {
    try {
      const response = await axios.get(`${URL}/getall_blog`)
      setData(response.data)
    } catch (error) {
      console.log('error fetching' , error);
    }
  }
  useEffect(() => {
    getAllBlog()
  }, [])

  const deleteBlog = async (id) =>{
    try {
      const response = await axios.delete(`${URL}/delete_blog/${id}`)
      toast.success('Blog deleted successfully')
    } catch (error) {
      console.log(error);
      toast.error('Blog deleted successfully')
    }
  }
  
  return (
    <div>
    <Header/>
      <div className='min-h-[100vh] bg-[#000000e5]'>
        <div className='flex flex-wrap justify-center gap-7  '>
            {
              data.map((item)=>(
                <div key={item._id} className='text-white bg-[black] mt-5 w-[300px] h-fit rounded hover:border'>
                        <div><img src={item.img} alt="" /></div>
                        <div className='p-[15px]'>
                            <h1>{item.title}</h1>
                            <p className='py-[15px]'>{item.content} <span className='text-[#ffffff2e]'><Link to={`/singleblog/${item._id}`}>read more</Link></span></p>
                            <hr />
                            <div className='flex justify-between pt-[15px] items-center'>
                                <h1>{item.author}</h1>
                                <div className='flex items-center gap-5'>
                                    <div><i onClick={()=>deleteBlog(item._id)} className='pi pi-trash text-[12px] bg-red-600 rounded-full p-2'></i></div>
                                    <div><Link to={`/editblog/${item._id}`}><span className='pi pi-pencil text-[12px] bg-blue-600 rounded-full p-2'></span></Link></div>
                                </div>
                            </div>
                        </div>
                </div>
              ))
            }
        </div>
    </div>
    </div>
  )
}
