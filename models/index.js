const albumComment = require('./Album-comments');
// getting all the models and sending them to controller though index
module.exports = {
    User: require('./User'),
    Post: require('./Post'),
    Album: require('./Albums'),
    Interaction: require('./interaction'),
    AlbumComment: require('./Album-comments')

}