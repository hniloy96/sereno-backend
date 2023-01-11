const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: {
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
    tracks: [
        {
            title: String,
            duration: Number
        }
    ]
});

const Album = mongoose.model('album', albumSchema)
module.exports = Album;