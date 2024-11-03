import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 border border-black'>
        <Link  href='/' className="px-2  sm:pl-14 py-3 border border-black">
            <Image src={assets.logo} width={120} alt=''/>
        </Link>
        <div className="w-28 sm:w-80  relative py-12 ">
          <div className='w-[50%] sm:w-[80%] absolute right-4'>
          <Link href='/admin/addproduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
<Image src={assets.add_icon} alt='' width={28}/>
<p className="invisible sm:visible">Add Blogs</p>
   </Link>
   <Link href='/admin/bloglist' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
<Image src={assets.blog_icon} alt='' width={28}/>
<p className="invisible sm:visible">Bloglist</p>
   </Link>
   <Link href='/admin/subscription' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
<Image src={assets.email_icon} alt='' width={28}/>
<p className="invisible sm:visible">Subscriptions</p>
   </Link>
          </div>
   
        </div>
    </div>
  )
}

export default Sidebar