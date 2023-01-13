const { string } = require('joi');
const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
  comments: {
    type: String,
    required: true
  },
  post:{
    type: mongoose.Types.ObjectId,
    ref: "Post",
    required: true
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
},
  {
    timestamps: true
})

const Interaction = mongoose.model('interaction', interactionSchema)
module.exports = Interaction;
