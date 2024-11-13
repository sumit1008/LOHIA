// import { MailtrapClient } from "mailtrap"
import { client, sender } from "./mailtrap.config.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"

//to send verification email to the user
export const sendVerificationEmail=async (email,verificationToken)=>{
    //get the receipent of the mail
    const recipient=[{email}]

    try{
        //creating response
        const response=await client.send({
            from:sender,
            to:recipient,
            subject:"verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })
        //printing response
        console.log("Email sent successfully", response);
    } catch(error){
        console.error(`Error sending verification`,error);
        throw new Error(`Error in sending email: ${error}`)
    }
};
 
//to send welcome email to user
export const sendWelcomeEmail=async(email,name)=>{
    //get the recipient
    const recipient=[{email}];
    try{
        //create the response for the user
        const response=await client.send({
            from:sender,
            to:recipient,
            template_uuid:"90459a2a-d926-403e-9bdb-41c7b436f6f8",
            template_variables:{
                "company_info_name": "Logia",
                "name": name,
            },
        });
        //ptint if 
        console.log("Welcome Email sent successfully",response);
        
    } catch(error){
        console.log(`Error in sending welcome mail`,error);
        throw new Error(`error sending welcome mail,${error}`);
        
    }
}