import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
const URL = 'http://localhost:5000'



export default function SingleBlog() {
    const {id} = useParams();
    const [blogdata, setblogdata] = useState({
      img: '',
      author: '',
      description: '',
      title: ''
    })
    const getSingleData = async () => {
      try {
        const response = await axios.get(`${URL}/getsingle_blog/${id}`);
        setblogdata(response.data);
      } catch (error) {
        console.error('Error fetching data:');
      }
    }    
    useEffect(() => {
     getSingleData()
    }, [id])

  return (
    <div>
      <Header/>
        <div className='text-white bg-[#000000ee] h-fit p-20 '>
            <div><img src={blogdata.img} className='h-[200px] w-full' alt="" /></div>
                <div className='p-[15px]'>
                  <h1>{blogdata.title}</h1>
                  <p className='py-[15px]'>{blogdata.description} <span className='text-[#ffffff2e]'>read more</span></p>
                  <hr />
                  <div className='flex justify-between pt-[15px] items-center'>
                    <h1>{blogdata.author}</h1>
                       <div className='flex items-center gap-5'>
                            <div><i className='pi pi-trash text-[12px] bg-red-600 rounded-full p-2'></i></div>
                            <div><span className='pi pi-pencil text-[12px] bg-blue-600 rounded-full p-2 '></span></div>
                        </div>
                  </div>
              </div>
        </div>
    </div>
  )
}
