import jwt from "jsonwebtoken";

//middleware to verify token
export const verifyToken=(req,res,next)=>{
    console.log("Cookie received:", req.cookies);
    //get the token from cookie
    const token=req.cookies.token;
    console.log(req.cookies.token);
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized - no token provided"
        });
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({
                success:false,
                message:"Unauthorized - no token provided"
            });
        }
        req.user_id=decoded.user_id;
        //console.log(decoded.user_id);
        console.log(req.user_id);
        next();
    } catch(error){
        return res.status(401).json({
            success:false,
            message:"Unauthorized - no token provided"
        });
    }
};