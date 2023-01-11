const express = require('express')
const router = express.Router()
const db = require('../models')


router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/', async (req,res, next) => {
    try {
        const allPost = await db.Post.find({})
        return res.status(200).json(allPost)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

router.get('/:id', async (req,res, next) => {
    try {
        const foundProduct = await db.Post.findById(req.params.id).populate('owner').exec()
        console.log(foundProduct)
        return res.status(200).json(foundProduct)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})


router.post('/', async (req,res,next) => {
    try {
        const createdPost = await db.Post.create(req.body)
        console.log(createdPost)
        res.status(201).json(createdPost)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

router.put('/:id', async (req,res,next) => {
    try {
        const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        console.log(updatedPost)
        return res.status(200).json(updatedPost)
    } catch (err) {
        console.error(err)
        return next(err)
    }
   
})

// router.delete('/:id', async (req,res,next) => {
//    try {
//     const deletedPost = await db.Post.findByIdAndDelete(req.params.id)
//     console.log(deletedPost)
//     res.redirect('/products')
//    } catch (err) {
//     console.error(err)
//     return next(err)
//    }
    
// })

module.exports = router