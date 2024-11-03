import mongoose from 'mongoose';
import React from 'react'

const Substable = ({email,date,mongoid,delemail}) => {
    const emaildate=new Date(date);
  return (
  <>
  <tr className='bg-white border-b text-left'>
    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace no-wrap'>
      {email?email:"No Email"}
    </th>
    <td className='px-6 py-4 hidden sm:block'>
{emaildate.toDateString()}
    </td>
    <td onClick={()=>delemail(mongoid)}  className='px-6 py-4 cursor-pointer'>
        X
    </td>
  </tr>
  </>
  )
}

export default Substable