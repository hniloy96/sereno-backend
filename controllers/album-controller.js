const Album = require("../models/album");

exports.index = (req, res, next) => {
    Album.find()
        .then(albums => {
            res.json(albums);
        })
        .catch(error => next(error));
};

