const express = require ( 'express')
const  router =  express.Router()
const {Signup,Login} = require ( '../controller/user/User.js')
//const Login  = require ( '../controller/user/User.js')
router.get('/',(req,res)=>{
        res.send("this is user router")
        
})
router.post("/signup",Signup)

router.post("/login",Login)




module.exports = router;