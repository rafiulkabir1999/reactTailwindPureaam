const mongoose = require('mongoose')

const Schema=new mongoose.Schema({
    message:{
        type:string,
        required:true,
    },
    username:{
        type:string,
        require:true
    },
    created:{
        type:Date,
        default:new Date()
    },
    rating:{
        type:number,
        required:true
    }
})
const Model = mongoose.model('rivew',Schema)

module.exports =  Model;