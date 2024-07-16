const express = require('express')
const app = express()
//using dotenv
require("dotenv").config()
//Using of router from userrouter.js
app.use('/',require("./routes/Userroutes"))
app.listen(process.env.PORT,()=>console.log(`I ma listening at Port ${process.env.PORT}`))