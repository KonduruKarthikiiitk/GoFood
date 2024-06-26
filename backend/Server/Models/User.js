import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   location :{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
    
   },
   password:{
    type:String,
    required:true
   },
   date:{
    type:String,
    default:Date.now
   }
})

const User = mongoose.model("user",userSchema)
export default User