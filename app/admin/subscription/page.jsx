'use client'
import Substable from '@/components/Admincomp/Substable'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  const[emails,setemails]=useState([]);
  const fetchemails=async()=>{
    const res=await axios.get('/api/email');
console.log(res);
    setemails(res.data.emails);
  }
const delemail=async(mongoid)=>{
const response =await axios.delete('/api/email',{
  params:{
    id:mongoid
  }
})
console.log(response)
  if(response.data.success){
    toast.success(response.data.msg);
    fetchemails();
  }else{
    toast.error("Error Deleting Email");
  }

}
  useEffect(()=>{
    fetchemails();
  },[]);
  return (
    <div className='flex-1 pt-5 px-3 sm:pt-12 sm:pl-16'>
    <h1>All Subscription</h1>
    <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
      <table className='w-full text-sm text-gray-500 '>
  <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
    <tr>
        <th scope='col' className='px-6 py-3 '>
          Email Subscription
        </th>
        <th scope='col' className='hidden sm:block px-6 py-3 '>
          Date
        </th>
        <th scope='col' className='px-6 py-3 '>
          Action
        </th>
    </tr>
  </thead>
  <tbody>
    {emails.map((item,index)=>{
      return <Substable key={index} delemail={delemail} mongoid={item._id} email={item.email} date={item.date}/>
    }
      )}
    
  </tbody>
      </table>
    </div>
    </div>
  )
}

export default Page