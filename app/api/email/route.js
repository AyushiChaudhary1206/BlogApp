import { connectdb } from "@/lib/config/db";
import Emailmodel from "@/lib/config/models/emailmodel";
import { NextResponse } from "next/server";

const loaddb=async()=>{
    await connectdb();
}
loaddb();
export async function POST(request){
    const formdata=await request.formData();
    const emaildata={
        email:`${formdata.get('email')}`,

    }
    await Emailmodel.create(emaildata);
    return NextResponse.json({success:true,msg:"Email Subscribed"});
}

export async function GET(request){
    const emails=await Emailmodel.find({});
    return NextResponse.json({emails});
}

export async function DELETE(request){
    const id=await request.nextUrl.searchParams.get("id");
 await Emailmodel.findByIdAndDelete(id);
    return NextResponse.json({success:true,msg:"Email Deleted"})
}