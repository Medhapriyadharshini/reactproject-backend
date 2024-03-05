const mongoose = require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Connection Established");
}).catch((error)=>{
    console.log("Mongodb connection Error");
})