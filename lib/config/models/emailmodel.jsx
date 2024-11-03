import mongoose from "mongoose";

const schema=new mongoose.Schema({
    email:{
        type:'String',
      required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const Emailmodel=mongoose.models.email||mongoose.model('email',schema);
export default Emailmodel;