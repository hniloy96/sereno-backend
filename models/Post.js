const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  Body: {
    type: String,
    required: true,
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

const Post = mongoose.model('post', postSchema)
module.exports = Post;
