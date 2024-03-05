const mongoose = require ('mongoose')

const msgSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true
    },
    phone :{
        type:Number,
        required:true
    },
    details :{
        type:String,
        required:true
    },
    property:{
        type:String,
        required:true
    },
    userId :{
        type:String,
        required:true
    }
})

const buyersmsg = mongoose.model("buyersmsg",msgSchema)
module.exports = buyersmsg