import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";

//signup function 
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

        //create new  user
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

        //send verificaition email to user
        await sendVerificationEmail(user.email,verificationToken);

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
};

//verify email function
export const verifyEmail=async(req,res)=>{
    //get the six digit code
    const {code}=req.body;
    try{
        //find the user and check if the token has expired or not
        const user=await User.findOne({
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()}
        });
        //if user is not found
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired Verification Code"});
        }
        //verify the user
        user.isVerified=true;

        //now the user is verified we can delete the verifiction code info from database
        user.verificationToken=undefined;
        user.verificationTokenExpiresAt=undefined;

        //save the user to db
        await user.save();

        //send welcome Email to thge user
        await sendWelcomeEmail(user.email,user.name);

        //sending response(you have to send response otherwise the req will get stuck)
        res.status(200).json({
            success:true,
            message:"Email verified successfully",
            user:{
                //printing everything
                ...user._doc,
                //hiding the password for security purpose
                password:undefined,
            }
        });
    } catch(error){
        console.log("error in verify email",error);
        res.status(500).json({success:false,message:"server error"});
        
    }
};

//login function
export const login=async(req,res)=>{
    //get user credentials from body
    const {email,password}=req.body;

    //now check for required credentials presence and verifyy the credentials
    try{
        const user=await User.findOne({email});
        //invalid credentials
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            });
        }
        //compare the password

        const isPassword=await bcryptjs.compare(password,user.password);
        //invalid password
        if(!isPassword){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            });
        }
        //now if everything is allright generate token and setcookie
        generateTokenAndSetCookie(res,user._id);
        //update the last login
        user.lastLogin=new Date();
        //save the user
        user.save();
        //send the response

        res.status(200).json({
            success:true,
            message:"Logged in successfully",
            user:{
                ...user._doc,
                password:undefined,
            },
        });
    } catch(error){
        console.log("error in login",error);
        res.status(500).json({success:false,message:"serror in login"});
        
    }

};
//logout function
export const logout=async(req,res)=>{
    //we just have to clear all cookie to do this
    res.clearCookie("token");
    res.status(200).json({
        success:true,
        message:"Logged out successfully"
    });
};
