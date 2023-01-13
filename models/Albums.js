const mongoose = require("mongoose");  // import mongoose module

const albumSchema = new mongoose.Schema({  // create a new mongoose schema
    title: {   // create the title field
        type: String,  // set the type of the field to string
        required: true  // set the field as required
    },
    artist: {  // create the artist field
        type: String,  // set the type of the field to string
        required: true  // set the field as required
    },
    tracks: {
        type: Array,
        default: []
    },
    image: {
        type: String,
    }
});

const Album = mongoose.model('album', albumSchema)  // create a mongoose model by passing the schema
module.exports = Album;  // export the Album model
