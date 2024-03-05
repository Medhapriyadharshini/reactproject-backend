const {json} = require('express')
const buyersmsg = require('../Models/msgSchema')

// add
exports.addUserMsg=async(req,res)=>{
    console.log("Inside Add users Message");
    res.status(200).json('Add message of buyer')
    
    // const userId = req.payload
    const {email,phone,details} = req.body

    // try{
    //     const existingProperty = await buyersmsg.find({property})
    //     if(existingProperty){
    //         res.status(406).json("Message already sended")
    //     }
    //     else{
    //         const newMessage = new buyersmsg({email,phone,property,details})
    //         await newMessage.save()
    //     res.status(200).json("Message Sended successfully")        
    // }

    // }
    // catch(err){
    //     res.status(404).json({message:err.message})
    // }
}