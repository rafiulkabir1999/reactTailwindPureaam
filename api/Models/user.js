const mongoose = require ("mongoose")

const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
           default:false
    },
    type:{
        type:String,
        default:'general'
    },
    signup:{
        type:Date,
        default:new Date()
    },
    
})

// Schema.path('phone').validate(()=>{
//     return false
// },'User already exsists')

const userMode = mongoose.model('user',Schema)
module.exports = userMode;