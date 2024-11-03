'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [image,setimage]=useState(false);
  const[data,setdata]=useState({
    title:"",
    description:"",
    category:"Startup",
    author:"ABC",
    authorimg:"/profile_icon.png",
  })

  const onchangehandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setdata(data=>({...data,[name]:value}))
  }

  const onsubmithandler=async(e)=>{
e.preventDefault();

console.log("hello");
const formData=new FormData();
formData.append('title',data.title);
formData.append('description',data.description);
formData.append('category',data.category);
formData.append('author',data.author);
formData.append('authorimg',data.authorimg);
formData.append('image',image);

const response= await axios.post('/api/blog',formData);


if(response.data.success){
  toast.success("Blog Created")
 setimage(false);
 setdata({
  title:"",
  description:"",
  category:"Startup",
  author:"ABC",
  authorimg:"/profile_icon.png",
})
}else{
  toast.error("Error");
}

  }
  return (
   <>
  <form onSubmit={onsubmithandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
     <p className="text-xl">Upload Thumbnail</p>
     <label htmlFor="image">
      <Image className='mt-4 cursor-pointer' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} alt='' height={70}/>
     </label>
     <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden required/>
     <p className="text-xl mt-4 ">Blog Title</p>
     <input name="title" onChange={onchangehandler} value={data.title} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='Type here' required />
     <p className="text-xl mt-4 ">Blog Description</p>
     
     
     <textarea name="description" onChange={onchangehandler} value={data.description} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border' rows={6} placeholder='Write content here' required />
  <p className='text-xl mt-4'>Blog Category</p>
  <select name="category" onChange={onchangehandler} value={data.category} className='mt-4 py-3 px-3 border text-gray-500 w-40'>
    <option value="Startup">Startup</option>
    <option value="Technology">Technology</option>
    <option value="Lifestyle">Lifestyle</option>
  </select>
  <br />
  <button className="mt-8 w-40 h-12 bg-black text-white" type='submit'>ADD</button>
  </form>
   </>
  )
}

export default page