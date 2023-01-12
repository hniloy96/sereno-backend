const express = require('express')
const router = express.Router()
const db = require('../models')
const { handleValidateOwnership, requireToken } = require('../middleware/auth')


router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/', async (req,res, next) => {
    try {
        const allComment = await db.Interaction.find({})
        return res.status(200).json(allComment)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

router.get('/:id', async (req,res, next) => {
    try {
        const foundComment = await db.Interaction.findById(req.params.id)
        console.log(foundComment)
        return res.status(200).json(foundProduct)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})


router.post('/', requireToken, async (req,res,next) => {
    try {
        const owner = req.user._id
        req.body.owner = owner
        const createdComment = await db.Interaction.create(req.body)
        console.log(createdComment)
        res.status(201).json(createdComment)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})


module.exports = router