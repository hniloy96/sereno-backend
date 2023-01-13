const express = require('express') //import express
const app = express() //create an express application
require('./config/connection') //require and run connection configuration 
const cors = require('cors') //import cors
const morgan = require('morgan') //import morgan
const { PORT } = process.env //get the port from environment variable
const userController = require('./controllers/User-controller') //import user controller 
const postController = require('./controllers/Post-controller') //import post controller 
const albumController = require('./controllers/album-controller') //import album controller 
const interactionCOntroller = require('./controllers/interaction-controller')

// parse incoming request bodies in a middleware before handlers
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) //use cors
app.use(morgan('dev')) //use morgan in dev mode

// routes handling 
app.use('/user', userController) //user route
app.use('/posts', postController) //post route
app.use('/albums', albumController) //album route
app.use('/interaction', interactionCOntroller)

// redirect to user route
app.get('/', (req,res) => {
    res.redirect('/user')
})

// route for 500 error
app.get('/error', (req,res) => {
    res.status(500).send(`Something went wrong...`)
})

// error handling middleware
app.use((error, res,req,next) => {
    console.error("inside middleware")
    if(error){
        return res.status(404).send(error.message)
    }
    next()
})

// catch all route with error handling
app.get('*', (req,res,next) => {
    if (req.error){
        res.status(404).send(`Error: ${req.error.message}`)
    } else {
        res.redirect('/error/')
    }
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})
