const {json} = require('express')
const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log("Inside register function");
    
    try{
        const { username,email,password }= req.body
        console.log(`${username},${password},${email}`);

        const  existingUser = await users.findOne({email})
    if(existingUser){
        res.status(401).json("User Already Registered")
    }
    else{
       const newUser = new users({
        username,email,password,github:"",link:"",profile:""
       })
       await newUser.save()
       res.status(200).json("User Registration Successfull")
    }
    }
    catch(err){
        res.status(400).json('Server error:'+err.message``)
    }
    
}

exports.login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await users.findOne({email,password})
        if(user){
            const token = jwt.sign({userId:user._id},"superkey2024")
            console.log(token);
            res.status(200).json({user,token})
            
        }
        else{
            res.status(401).json("Invalid login")
        }
    }
    catch(err){
        res.status(500).json("Server error:"+ err.message)
    }

}

// exports.userDetails=async(req,res)=>{
//     try{
//         const userDetail=await users.find()
//         res.status(200).json(userDetail)
//     }catch(err){
//         res.status(401).json(err.message)
//     }
// }


