const express = require('express')
const router = express.Router()
const db = require("../models")
const bcrypt = require('bcrypt')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', async (req, res, next) => {
    try {
        const allUser = await db.User.find()
        return res.status(200).json(allUser)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await db.User.findById(req.params.id)
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

        const newUser = await db.User.create(req.body)
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

router.post('/login', async (req, res, next) => {})

router.put('/:id', async (req, res) => {
    try {
        

        const updatedPerson = await db.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPerson)
    } catch (err) {
        res.status(400).json({ error: err })
    }

})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedUser = await db.User.findByIdAndDelete(req.params.id)
        console.log(deletedUser)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        return next(err)
    }

})

module.exports = router