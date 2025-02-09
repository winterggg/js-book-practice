const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // todo: https://mongoosejs.com/docs/populate.html
        required: true
    },
    favoriteCount: {
        type: Number,
        default: 0
    },
    favoritedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { // https://mongoosejs.com/docs/guide.html#timestamps
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;