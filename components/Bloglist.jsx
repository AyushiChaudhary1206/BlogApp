'use client'
import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import Bloagitem from './Bloagitem'
import axios from 'axios'

const Bloglist = () => {
  const[menu,setmenu]=useState("All");
  const[blogs,setblogs]=useState([]);
  const fetchblogs=async()=>{
    const response=await axios.get('/api/blog');
    setblogs(response.data.blogs);
  }
  useEffect(()=>{
    fetchblogs();
  },[])
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>{setmenu("All")}} className={menu==="All"?"bg-black text-white py-1 px-4 rounded-sm":""}>All</button>
            <button onClick={()=>{setmenu("Technology")}} className={menu==="Technology"?"bg-black text-white py-1 px-4 rounded-sm":""}>Technology</button>
            <button onClick={()=>{setmenu("Startup")}} className={menu==="Startup"?"bg-black text-white py-1 px-4 rounded-sm":""}>Startup</button>
            <button onClick={()=>{setmenu("Lifestyle")}} className={menu==="Lifestyle"?"bg-black text-white py-1 px-4 rounded-sm":""}>Lifestyle</button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
            {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>{
                return <Bloagitem key={index} id={item._id} title={item.title} image={item.image} description={item.description} category={item.category} />
            })}
        </div>
    </div>
  )
}

export default Bloglist