import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
        bio:{ type:String},
       skills:[{type:String}],
       resume:[{type:String}],
       resumeOriginalName:{type:String},
       company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
       profilePic:{
        type:String,
        default:''
       }
    },
},{timestamps:true})

export const User = mongoose.model("User", userSchema)