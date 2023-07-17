const mongoose = require('mongoose')
const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:String,
        require:true,
       
    },
    cetegory:{
        type:String,
        required:true
    },
    subcetegory:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true,
    },
    detailsPhoto:[String],
    
})

// Schema.path('phone').validate(()=>{
//     return false
// },'User already exsists')

const productModel = mongoose.model('product',Schema)

module.exports = productModel;