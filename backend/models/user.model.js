import mongoose from "mongoose";

//creating user schema

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    //token to reser pass for each user
    resetPasswordToken:String,
    //the above token will expire after this time(security ke liye)
    resetPasswordExpiresAt:Date,
    //verify account token for each user
    verificationToken:String,
    verificationTokenExpiresAt:Date,
},{timestamps:true});

//creating user model

export const User=mongoose.model('User',userSchema);