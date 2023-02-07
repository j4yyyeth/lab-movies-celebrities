const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model.js');

router.get('/', (req, res, next)=>{
    Celebrity.find()
        .then((celeb)=>{
            res.render('celebrities/celebrities.hbs', {celebrity: celeb});
        })
        .catch((err)=>{
            console.log(err);
        })
})

router.get('/create', (req, res, next)=> {
    res.render('celebrities/new-celebrity.hbs');
})

router.post('/create', (req, res, next)=> {
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then((data)=>{
        console.log(data);
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        res.render('celebrities/new-celebrity.hbs');
        console.log(err);
    })
})

module.exports = router;