'use client'
import { assets } from '@/Assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import Link from 'next/link'

const Header = () => {
  const[email,setemail]=useState("");
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    const formdata=new FormData();
    formdata.append("email",email);
    const response=await axios.post('/api/email',formdata);
    if(response.data.success){
      toast.success(response.data.msg);
      setemail("");
    }else{
      toast.error("Error")
    }
  }
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
    <div className="flex justify-between items-center">
        <Image src={assets.logo} width={200} alt='' className='w-[130px] sm:w-auto'/>
        <Link href='/admin'>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started<Image src={assets.arrow} alt=''/></button>
        </Link>
    </div>
    <div className="text-center my-8">
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque fugiat accusamus numquam blanditiis nemo ullam mollitia maxime reiciendis sunt.</p>
    <form onSubmit={onSubmitHandler} className='flex justify-between  max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
 <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder='Enter Your email' className='pl-4 outline-none' />
 <button type="submit" className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
    </form>
    </div>
    
    </div>
  )
}

export default Header