const express = require('express')

const userController = require('../Controller/userController')
const sellController = require('../Controller/sellController')
const msgController = require('../Controller/msgController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')

const router = new express.Router()


// 1. register
router.post('/register',userController.register)


// 2. login API routes - localhost:4000/login
router.post('/login',userController.login)

// 3. sell project
router.post('/property/add',jwtMiddleware,multerConfig.single('projectImage'),sellController.addUserProperty)

// get user property
// 1. property user
router.get('/property/userProperty',jwtMiddleware,sellController.getUserProperty)

// 2. all projects
router.get('/property/allProperty',jwtMiddleware,sellController.getAllProperty)

// 3. home projects
// router.get('/property/homeProperty',sellController.getHomeProperty)

// update property
router.put('/property/update-property/:id',jwtMiddleware,multerConfig.single('projectImage'),sellController.editProperty)

// delete property
router.delete('/property/delete/:pid',jwtMiddleware,sellController.deleteProperty)

module.exports = router

// user details
// router.get('/admindashboard',userController.userDetails)

// usermessage
router.post('/property/buycard',msgController.addUserMsg)