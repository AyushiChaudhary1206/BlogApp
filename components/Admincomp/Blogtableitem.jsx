import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Blogtableitem = ({authorimg,title,author,date,deleteblog,mongoId}) => {
    const bdate=new Date(date);
  return (
   <tr className='bg-white border-b'>
    <th className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope='row'>
        <Image width={40} height={40} src={authorimg?authorimg:assets.profile_icon} alt=''/>
     <p className="">{author?author:"No Author"}</p>
    </th>
    <td className='px-6 py-4'>
      {title?title:"No Title"}
    </td>
    <td className='px-6 py-4'>
      {bdate.toDateString()}
    </td>
     <td onClick={()=>deleteblog(mongoId)} className='px-6 py-4 cursor-pointer'>
      X
    </td>
   </tr>
  )
}

export default Blogtableitem