const property = require('../Models/sellSchema')

// add property
exports.addUserProperty=async(req,res)=>{
    console.log("Inside adduserproperty");
    // res.status(200).json("Add user  project request")

    // get user id
    const userId = req.payload

    // get property details
    const {name,description,address,regPrice,discPrice} = req.body

    // get image
    projectImage= req.file.filename
    console.log(projectImage);

    // logic of adding property
    try{
        const existingProperty = await property.findOne({name})
        if(existingProperty){
            res.status(406).json("Property already exists!")
        }
        else{
            const newProperty = new property({name,description,address,regPrice,discPrice,projectImage,userId})
            await newProperty.save()
            res.status(200).json(newProperty)
        }

    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}


// get property
exports.getUserProperty = async(req,res)=>{
    // user id
    const userId = req.payload

    try{
        const userProperty = await property.find({userId})
        console.log(userProperty);
        res.status(200).json(userProperty)

    }
    catch(err){
        res.status(401).json(err.message)
    }
}

// get all property
exports.getAllProperty=async(req,res)=>{
    const searchKey =req.query.search
    
    const query ={
        name:{
            $regex:searchKey,
            $options:"i"
        }
    }
    try{
        const AllProperty = await property.find(query)
        res.status(200).json(AllProperty)
    }
    catch(err){
        res.status(401).json(err.message)
    }
}


// get home property
// exports.getHomeProperty = async(req,res)=>{
//     try{
//         const HomeProperty = await property.find().limit(3)
//         res.status(200).json(HomeProperty)
//     }
//     catch(err){
//         res.status(401).json(err.message)
//     }
// }

// edit
exports.editProperty=async(req,res)=>{
    console.log("inside edit property");
    const {name,description,address,regPrice,discPrice,projectImage}=req.body;

    const uploadImage = req.file?req.file.filename:projectImage;

    const userId= req.payload

    const {id}= req.params

    try{
        const updateProperty = await property.findByIdAndUpdate({_id:id},{name,description,address,regPrice,discPrice,projectImage:uploadImage,userId},{new:true})

        // save
        await updateProperty.save()
        res.status(200).json(updateProperty)
        console.log(updateProperty);

    }
    catch(error){
        res.status(401).json(error)
    }
}


// delete details
exports.deleteProperty=async(req,res)=>{
    const {pid}=req.params
    try{
        const deleteData=await property.findByIdAndDelete({_id:pid})
        res.status(200).json(deleteData)
    }
    catch(err){
        res.status(401).json(err)
    }
}