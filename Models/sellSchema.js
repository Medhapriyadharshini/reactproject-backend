const mongoose = require ('mongoose')

const sellSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    regPrice :{
        type:String,
        required:true
    },
    discPrice :{
        type:String,
        required:true
    },
    projectImage:{
        type:String,
        required:true
    },
    userId :{
        type:String,
        required:true
    },
})

const property = mongoose.model("property",sellSchema)
module.exports = property