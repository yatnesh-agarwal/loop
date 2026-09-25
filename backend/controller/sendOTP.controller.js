const bcrypt = require('bcrypt');
const prisma = require("../services/prisma")
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

const createNewUser = async (req,res) => {
    try{
    const {name, email, password} = req.body
    if (!name || !email || !password){
        return res.status(400).json({
            message : "Name, Email and Password is required!"
        })
    }

    const existingUser = await prisma.user.findUnique({
        where: {email : email}
    })

    if (existingUser){
        return res.status(409).json({
            message: "User already exists"
        })
    }
    
    const hashPassword = await bcrypt.hash(password,12)

    const user = await prisma.user.create({
        data:{
            fullName: name,
            email: email,
            passwordHash: hashPassword
        },
        select:{
            id: true,
            fullName: true,
            email: true,
            createdAt: true
        }
    })

    return res.status(201).json({
        message: "Account Created Succesfully!"
    })
    }

    catch(err){
        console.log("Error while creating account: ",err)
        return res.status(500).json({
            error: "Error while creating account"
        })
    }


}

module.exports = {sendOTP, verifyOTP, createNewUser}