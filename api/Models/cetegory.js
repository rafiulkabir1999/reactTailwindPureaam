const mongoose = require('mongoose')

const schema = mongoose.Schema({
    cetegory:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    subcetegory:[
     {
         type:String,
     }
    ]

})
const CetegoryModel = mongoose.model('cetegory',schema)
module.exports = CetegoryModel;