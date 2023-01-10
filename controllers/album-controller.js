const Album = require("../models/album");

exports.show = (req, res, next) => {
    const id = req.params.id;
    Album.findById(id)
        .then(album => {
            if (!album) {
                const error = new Error("Album not found");
                error.status = 404;
                throw error;
            }
            res.json(album);
        })
        .catch(error => next(error));
};

exports.create = (req, res, next) => {
    const albumData = req.body;
    const newAlbum = new Album(albumData);
    newAlbum.save()
        .then(album => {
            res.status(201).json(album);
        })
        .catch(error => next(error));
};

