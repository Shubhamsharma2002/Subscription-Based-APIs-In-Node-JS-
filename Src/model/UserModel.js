import mongoose, { Schema } from "mongoose";
const UserSchema = new mongoose.Schema({
     name:{
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
    is_subscribed:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export const User = mongoose.model("User", UserSchema);