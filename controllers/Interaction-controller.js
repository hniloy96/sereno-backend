const express = require('express')

const route = express.Router()

const db = require('../models')

route.use(express.json())
route.use(express.urlencoded({extended: true}))


route.get('/', async (req,res, next) => {
    try {

        const allReviews = await db.Interaction.find().populate("product")
        return res.status(200).json(allReviews)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

route.get('/:id', async (req,res, next) => {
    try {
        const foundProduct = await db.Post.findById(req.params.id)
        const allReviews = await db.Interaction.find({product: req.params.id})
        return res.status(200).json({product: foundProduct, reviews: allReviews})
     } catch (err) {
        console.error(err)
        return next(err)
    }
})


route.post('/', async (req,res,next) => {
    try {
        const createdReview = await db.Interaction.create(req.body)
        console.log(createdReview)
        res.status(201).json(createdReview)
    } catch (err) {
        console.error(err)
        return next(err)
    }
})

route.put('/:id', async (req,res,next) => {
    try {
        const updatedReview = await db.Interaction.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        console.log(updatedReview)
        return res.status(200).json(updatedReview)
    } catch (err) {
        console.error(err)
        return next(err)
    }
   
})

route.delete('/:id', async (req,res,next) => {
    try {
        const deletedProduct = await db.Post.findByIdAndDelete(req.params.id)
        const deletedReviews = await db.Interaction.deleteMany({product: req.params.id})
        res.redirect("/products")
     } catch (err) {
        console.error(err)
        return next(err)
    }
})

module.exports = route