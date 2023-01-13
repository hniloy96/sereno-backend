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
        const foundComments = await db.AlbumComment.find({ album: req.params.id})
         // find album by id
         return res.status(200).json({album: foundAlbum, comments: foundComments})
    } catch (err) {
        console.error(err)
        return next(err)  // handle the error
    }
})

// route to post a new album, this will be done only through the develepors
router.post('/', async (req, res, next) => {
    try {
        const newAlbum = await db.Album.create(req.body)
        console.log(newAlbum)
        res.status(201).json(newAlbum)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

module.exports = router
