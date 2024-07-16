const express = require('express')
const { getdata, postdata } = require('../controllers/Usercontroller')
const router = express.Router()
router.get('/getdata', getdata )
router.post('/postapi/:id', postdata)
module.exports=router