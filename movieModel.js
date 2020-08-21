const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    img:{
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    }
})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie