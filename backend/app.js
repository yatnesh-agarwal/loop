require("dotenv").config()
const express = require("express")
const router = require("./routes/verifyMail.route")

const app = express()

app.use(express.json())

app.use("/api",router)

app.listen(3000,()=>{
    console.log("Backend running on port 3000")
})