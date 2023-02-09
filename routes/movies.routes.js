const router = require("express").Router();
const Movie = require('../models/Movie.model.js');
const Celebrity = require('../models/Celebrity.model')

router.get('/', (req, res, next)=>{
    res.render('movies/movies.hbs')
})

router.get('/create', (req, res, next)=>{
    Celebrity.find()
    .then((foundCelebrities) => {
        res.render('movies/new-movie.hbs', {foundCelebrities});
    })
    .catch((err) => {
        console.log(err)
    })
})

router.post('/create', (req, res, next)=> {
    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast
    })
    .then((data)=>{
        console.log(data);
        res.redirect('/movies')
    })
    .catch((err)=>{
        res.render('movies/new-movie.hbs');
        console.log(err);
    })
})



module.exports = router;