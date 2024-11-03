import mongoose from "mongoose";

export const connectdb=async()=>{
  await  mongoose.connect("mongodb+srv://ayushichaudhary051:8m9DTXBc1KOHnDbo@cluster0.pgxta.mongodb.net/blog-app");

}