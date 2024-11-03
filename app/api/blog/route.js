import { connectdb } from "@/lib/config/db"
import Blogmodel from "@/lib/config/models/blogmodel";
import axios from "axios";
import {writeFile} from 'fs/promises'
const { NextResponse } = require("next/server")
const fs=require("fs");

const loaddb=async()=>{
await connectdb();
}
loaddb();

export async function GET(request){
    const blogid=request.nextUrl.searchParams.get("id");
    console.log(blogid);
    if(blogid){
        const blog=await Blogmodel.findById(blogid);
        return NextResponse.json(blog);
    }
    else{
   const blogs=await Blogmodel.find({});
   return NextResponse.json({blogs});
    }

}

export async function POST(request){
    const formdata=await request.formData();
    const timestamp=Date.now();
    const image=formdata.get('image');
    const imagebytedata=await image.arrayBuffer();
    const buffer=Buffer.from(imagebytedata);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`;

   const blogdata={
    title:`${formdata.get('title')}`,
    description:`${formdata.get('description')}`,
    category:`${formdata.get('category')}`,
    author:`${formdata.get('author')}`,
    image:`${imgUrl}`,
    authorimg:`${formdata.get('authorimg')}`,

   }

   await Blogmodel.create(blogdata);
   
    return NextResponse.json({"success":true});

}
export async function DELETE(request){
    const id=await request.nextUrl.searchParams.get("id");
    const blog=await Blogmodel.findById(id);
   fs.unlink(`./public${blog.image}`,()=>{
   
   })
   await Blogmodel.findByIdAndDelete(id);
   return NextResponse.json({msg:"Blog Deleted"});
}