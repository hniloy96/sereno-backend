const mongoose = require('mongoose');
mongoose.connect(process.env.{
    useCreateIndex: true
});

const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  songs: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
