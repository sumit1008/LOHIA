import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";



export const signup=async (req,res)=>{
    //grab data feom user
    const {email,password,name}=req.body;

    try{
        //check for all required fields
        if(!email||!password||!email){
            throw new Error("Please fill all required fields");
        }
        //check if user already exits
        const userAlreadyExits=await User.findOne({email});
        if(userAlreadyExits){
            //throw new Error("User already exits");
            return res.status(400).json({success:false,message:"User already exits"});

        }
        //if not already present
        //hash the password
        const hashedPassword=await bcryptjs.hash(password,10);
        //create the cerificaton code
        const verificationToken=Math.floor(100000+Math.random()*900000).toString();

        //create tge  user
        const user=new User({
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt:Date.now()+24*60*60*1000 //set for 24 hours
        });
        //saving the user
        await user.save();
        //authenticate user (jwt)
        generateTokenAndSetCookie(res,user._id);

        res.status(201).json({
            success:true,
            message:"User created Successfully",
            user:{
                ...user._doc,
                password:undefined,
            },
        });

    } catch(error){
        res.status(400).json({success:false,message:error.message});
    }
}
export const login=async(req,res)=>{
    res.send("login route");
}
export const logout=async(req,res)=>{
    res.send("logout route");
}