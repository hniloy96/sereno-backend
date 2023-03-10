const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  body: {
    type: String,
    require: true
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
