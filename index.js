require('dotenv').config()

const express = require('express')
const cors = require('cors')

const db= require('./DB/connection')

const router = require('./Router/route')

// const appMiddleware = require('./Middlewares/appMiddleware')

const jwtMiddleware = require('./Middlewares/jwtMiddleware')

const rsServer = express()

rsServer.use(cors())
rsServer.use(express.json())
// rsServer.use(appMiddleware)
rsServer.use(router)
rsServer.use('./uploads',express.static('./uploads'))

const PORT = 4000 || process.env.PORT
rsServer.listen(PORT,()=>{
    console.log('Listening on port',+PORT);
})

rsServer.get("/",(req,res)=>{
    res.send('<H1>Project fair is started</H1>')
})