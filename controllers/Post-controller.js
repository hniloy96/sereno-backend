const express = require('express')
const router = express.Router()
const db = require('../models')
const { handleValidateOwnership, requireToken } = require('../middleware/auth')


router.use(express.json())
router.use(express.urlencoded({extended: true}))

//api call for all the posts
router.get('/', async (req,res, next) => {
    try {
        const allPost = await db.Post.find({})
        return res.status(200).json(allPost)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

//this is pulling individual post and all of its comment contents
router.get('/:id', async (req,res, next) => {
    try {
        const foundProduct = await db.Post.findById(req.params.id)
        const foundComments = await db.Interaction.find({ post: req.params.id})
        return res.status(200).json({post: foundProduct, comments: foundComments})
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

// to create new posts
router.post('/', requireToken, async (req,res,next) => {
    try {
        const owner = req.user._id
        req.body.owner = owner
        const createdPost = await db.Post.create(req.body)
        console.log(createdPost)
        res.status(201).json(createdPost)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

// to update a post
router.put('/:id', requireToken, async (req,res,next) => {
    try {
        handleValidateOwnership(req, await db.Post.findById(req.params.id))
        const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        console.log(updatedPost)
        return res.status(200).json(updatedPost)
    } catch (err) {
        console.error(err)
        return next(err)
    }
   
})

// to delete a post 
router.delete('/:id', requireToken, async (req,res,next) => {
   try {
    handleValidateOwnership(req, await db.Post.findById(req.params.id))
    const deletedPost = await db.Post.findByIdAndDelete(req.params.id)
    console.log(deletedPost)
    res.redirect('/products')
   } catch (err) {
    console.error(err)
    return next(err)
   }
    
})

module.exports = router