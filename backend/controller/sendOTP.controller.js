const otpGenerator = require('otp-generator')
const { sendOTPEmail } = require('../services/email.service')

let generatedOTP;

const sendOTP = async (req,res) => {
    const {email} = req.body
    const otp = otpGenerator.generate(
        4,{
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        }

    )
    try{
        await sendOTPEmail(email, otp)
        generatedOTP = otp
        // console.log(`EmailId: ${email}\n OTP: ${otp}`)
        res.status(200).json({
            message: "OTP Sent Succesfully!"
        })
    }
    catch(err){
        console.log("Error while sending OTP")
    }
}

const verifyOTP = (req,res) => {
    const {otp} = req.body
    if (String(otp) == String(generatedOTP)){
        return res.status(201).json({
            message: "OTP verified successfully!"
        })
    }
    else{
        return res.status(400).json({
            message: "Invalid OTP, try again!"
        })
    }
}

module.exports = {sendOTP, verifyOTP}