const express = require('express')
const app = express()
require('./config/connection')
const cors = require('cors')
const morgan = require('morgan')
const { PORT } = process.env
const userController = require('./controllers/User-controller')




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))

app.use('/user', userController)


app.get('/', (req,res) => {
    res.redirect('/user')
})

app.get('/error', (req,res) => {
    res.status(500).send(`Something went wrong...`)
})

app.use((error, res,req,next) => {
    console.error("inside middleware")
    if(error){
        return res.status(404).send(error.message)
    }
    next()
})

app.get('*', (req,res,next) => {
    if (req.error){
        res.status(404).send(`Error: ${req.error.message}`)
    } else {
        res.redirect('/error/')
    }
})


app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})

