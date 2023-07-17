const express = require ( "express")
const productModel = require ( '../Models/product.js')
const controller = require('../controller/delete.js')

const router =express.Router()

//procuct/cetegory
router.get('/:cetegory',async(req,res) => {
    try {

        const dataFind = await productModel.find({cetegory:req.params.cetegory})
        //console.log(dataFind)
        res.send(dataFind)
        
    } catch (error) {
        throw error;
    }
})

//product/:Search
router.get('/search/:search',async(req,res) => {
    //console.log(typeof(req.params.search.toString()))
    try {
       const searchproduct = await productModel.find({name:req.params.search.toString()})
       console.log(searchproduct)
      if(searchproduct.length > 0 )
       res.send(searchproduct)
       else res.status(400).send(null)
    } catch (error) {
        res.status(400)
    }
})

router.delete('/delete/:id',async(req,res) => {
    try {

        const deleteitem = await productModel.deleteOne({cetegory:req.params.id})
        console.log(deleteitem)
        res.status(200)
        
    } catch (error) {
        throw error
    }
})

router.post('/Delete/:id',controller.removeSync)




module.exports = router;