const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true

  }
},
  {
    timestamps: true
})

const Product = mongoose.model('Product', postSchema)
module.exports = Product;
