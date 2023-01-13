const express = require('express')
const router = express.Router()
const db = require('../models')
const { requireToken } = require('../middleware/auth')


router.use(express.json())
router.use(express.urlencoded({extended: true}))


// to create comments on an album thread
router.post('/', requireToken, async (req,res) => {
    try {
        const owner = req.user._id
        req.body.owner = owner
        const createdComment = await db.AlbumComment.create(req.body)
        console.log(createdComment)
        res.status(201).json(createdComment)
    } catch (err) {
        console.error(err)
    }
})


module.exports = router