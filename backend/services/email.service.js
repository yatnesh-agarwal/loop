const nodemailer = require("nodemailer")

const transporter = new nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

const sendOTPEmail = async (email, otp) =>{
    try{
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Email Verification Code",
            text: `Your OTP is ${otp}. It will expire in 10 minutes.`
        })
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {sendOTPEmail}