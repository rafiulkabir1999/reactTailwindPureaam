const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
       // required:true,
    },
    phone:{
        type:String,
    },
    dist:{
        type:String,
    },
    upozila:{
        type:String,
    },
    home:{
        type:String,
    },
    order:[],
    payment:String
})

const model = mongoose.model('order',schema)
module.exports = model;