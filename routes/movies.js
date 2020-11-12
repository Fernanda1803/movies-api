var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movies.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find().sort('-year').exec(function(err, movies) {
    if (err) res.status(500).send(err);
    else res.status(200).json(movies);
  });
});

/* GET users listing whit ID. */
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function (err, movieinfo) {
    if (err) res.status(500).send(err);
    else res.status(200).json(movieinfo);
  });
});

/* POST a new movie. */
router.post('/', function(req, res, next) {
  Movie.create(req.body, function (err, movieinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* PUT the movies identified by id. */
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, movieinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* DELETE the movies identified by id. */
router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndDelete(req.params.id, function (err, movieinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
