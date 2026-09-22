const express = require("express")
const { sendOTP, verifyOTP } = require("../controller/sendOTP.controller")

const router = express.Router()

router.post("/verifyOTP",verifyOTP)

router.post("/sendOTP",sendOTP)

module.exports = router