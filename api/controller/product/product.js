const express = require ( 'express')
const orderModel = require ( '../../Models/order.js')
const router = express.Router()


router.post('/',async(req,res)=>{
  
  //const {name,phone,dist,upozila,home,order,payment} = req.body
  try {
    const order = new orderModel(req.body)
    await order.save()
    res.send(req.body)

  } catch (error) {
    console.log(error)
  }
})

module.exports = router;