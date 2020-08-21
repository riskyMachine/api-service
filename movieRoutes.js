const express = require('express')
const app = express()
const router = new express.Router()
const Movie = require('./movieModel')

// Post movies to Database
router.post('/post/movie',async (req,res) => {
    try{
        const movie = new Movie({
            name: req.body.name,
            img: req.body.img,
            summary: req.body.summary
        })
        await movie.save()
        res.status(200).send(movie)
    }catch(e){
        res.status(400).send()
    }
})

// Get by name
router.get('/get/movie/name', async (req,res) => {
    try{
        const name = req.body.name
        const movie = await Movie.find({name})
        res.send(movie)      
    }catch(e){
        res.status(400).send(e)
    }

})

// Get all movies
router.get('/get/movie', async (req,res) => {
    try{
        const movie = await Movie.find()
        res.status(200).send(movie)       
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = router