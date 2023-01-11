const express = require('express')
const router = express.Router()
const db = require("../models")
const bcrypt = require('bcrypt')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', async (req, res, next) => {
    try {
        const allUser = await db.Album.find()
        return res.status(200).json(allUser)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await db.Album.findById(req.params.id)
        console.log(foundUser)
        return res.status(200).json(foundUser)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})


router.post('/register', async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(req.body.password, salt)
        req.body.password = passHash

        const newUser = await db.Album.create(req.body)
        console.log(createdUser)
        res.status(201).json({
            user: newUser,
            isLpggedIn: true
        })
 
    } catch (err) {
        console.error(err)
        return next(err)
    }
})




module.exports = router
