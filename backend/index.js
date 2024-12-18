import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app=express();
app.use(express.json());//allow us to parse incoming req:req.body
app.use(cookieParser());//allow us to parse incoming cookie
app.use("/api/auth",authRoutes);

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port 3000");
});
