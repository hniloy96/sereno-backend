const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  genre: {
    type: String,
    required: true
  songs: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    required: true
});

module.exports = mongoose.model('Album', AlbumSchema);
