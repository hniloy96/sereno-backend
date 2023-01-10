const mongoose = require('mongoose')

const interactSchema = new mongoose.Schema({
  like: {
    type: Boolean,
    default: false,
  },
  comment: {
    type: String,
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Post"
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    // required: true
  }
},
  {
    timestamps: true
})

const Interaction = mongoose.model('interaction', interactSchema)
module.exports = Interaction;