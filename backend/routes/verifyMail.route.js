const express = require("express")
const { sendOTP, verifyOTP, createNewUser } = require("../controller/sendOTP.controller")

const router = express.Router()

router.post("/verifyOTP",verifyOTP)

router.post("/sendOTP",sendOTP)

router.post("/createNewUser",createNewUser)

module.exports = router