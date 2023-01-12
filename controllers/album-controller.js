const express = require('express')  // import express module
const router = express.Router()  // create a new router
const db = require("../models") // import database model
const bcrypt = require('bcrypt') // import bcrypt to hash the password

// use express middleware to handle json and urlencoded data
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// route to get all the albums from database
router.get('/', async (req, res, next) => {
    try {
        const allUser = await db.Album.find() // find all the albums from database
        return res.status(200).json(allUser) // return the result with status 200
    } catch (err) {
        console.error(err)
        return next(err)  // handle the error
    }
})

// route to get a specific album by id
router.get('/:id', async (req, res, next) => {
    try {
        const foundAlbum = await db.Album.findById(req.params.id)
         // find album by id
        return res.status(200).json(foundAlbum) // return the result with status 200
    } catch (err) {
        console.error(err)
        return next(err)  // handle the error
    }
})

// route to register a new album
router.post('/register', async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10) // generate a salt
        const passHash = await bcrypt.hash(req.body.password, salt) // hash the password
        req.body.password = passHash  // replace the original password with the hashed password
        const newUser = await db.Album.create(req.body) // create new album
        console.log(createdUser)
        res.status(201).json({
            user: newUser,
            isLoggedIn: true  // return the new album and a flag indicating that the user is logged in
        })
    } catch (err) {
        console.error(err)
        return next(err)  // handle the error
    }
})

module.exports = router
