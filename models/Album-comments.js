const mongoose = require('mongoose')

const albumCommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  album:{
    type: mongoose.Types.ObjectId,
    ref: "Album",
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

const AlbumComment = mongoose.model('albumcomment', albumCommentSchema)
module.exports = AlbumComment;
