import express from "express";
import { login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";


const router=express.Router();

//creating routes 

//signup route
router.post("/signup",signup);

//login route
router.post("/login",login);

//logout route
router.post("/logout",logout);

//verify email route
router.post("/verify-email",verifyEmail);

export default router;