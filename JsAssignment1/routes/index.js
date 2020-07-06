'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('Home', { home: 'Express' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('Home', { home: 'Express' });
});
/* GET project page. */
router.get('/projects', function (req, res, next) {
    res.render('Projects', { projects: 'Express' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('Services', { services: 'Express' });
});
/* GET aboutMe page. */
router.get('/aboutMe', function (req, res, next) {
    res.render('aboutMe', { aboutMe: 'Express' });
});
/* GET contact page. */
router.get('/Contact', function (req, res, next) {
    res.render('Contact', { contact: 'Express' });
});

module.exports = router;
