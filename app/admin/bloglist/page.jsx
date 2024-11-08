'use client'
import Blogtableitem from '@/components/Admincomp/Blogtableitem'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  const[blogs,setblogs]=useState([]);
  const fetchblogs=async()=>{
  const response=await axios.get('/api/blog');
  console.log(response.data)
  setblogs(response.data.blogs);
  }
  const deleteblogs=async(mongoId)=>{
     const response=await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
     })
     toast.success(response.data.msg);
     fetchblogs();
  }
  useEffect(()=>{
    fetchblogs();
  },[]);
  return (
    <div className='flex-1 pt-5 px-3 sm:pt-12 sm:pl-16'>
      <h1>All Blogs</h1>
      <div className="relative max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide"></div>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
               <tr>
                <th scope='col' className='hidden sm:block px-6 py-3'>
            Author Name
                </th>
                <th scope='col' className='px-6 py-3'>
            Blog Title
                </th>
                <th scope='col' className='px-6 py-3'>
            Date
                </th>
                <th scope='col' className=' px-6 py-3'>
            Action
                </th>
               </tr>
            </thead>
            <tbody>
              {blogs.map((item,index)=>{
                 return <Blogtableitem  key={index} deleteblog={deleteblogs} mongoId={item._id} title={item.title} author={item.author} authorimg={item.authorimg} date={item.date}/>
                  })}
            
            </tbody>
          </table>
    </div>
  )
}

export default Page