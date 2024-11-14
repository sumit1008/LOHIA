import jwt from "jsonwebtoken";
//creating token so that user dont have to login persistently
//securing the user data against XSS and CSRF
export const generateTokenAndSetCookie = (res, user_id) => {
    const token = jwt.sign(
        { user_id: user_id.toString() },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
    //setting the token as cookie
    res.cookie("token", token, {
        //makes the cookie
        // inaccessible to JavaScript on the client side, reducing the risk of XSS (cross-site scripting) attacks.

        httpOnly: true,

        // ensures that the cookie is only sent over HTTPS 
        //when the app is in production, further securing it from interception

        secure: process.env.NODE_ENV === "production",

        //restricts the cookie from being sent with cross-site requests, 
        //protecting against CSRF (cross-site request forgery) attacks

        sameSite: "strict",

        //sets the cookie to expire in 7 days (in milliseconds), matching the JWT’s expiration
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return token;
};
