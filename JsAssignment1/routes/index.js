'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/views/home', function (req, res, next) {
    res.render('Home', { home: 'Express' });
});
/* GET project page. */
router.get('/views/projects', function (req, res, next) {
    res.render('Project', { projects: 'Express' });
});
//.../views/
/* GET services page. */
router.get('/views/services', function (req, res, next) {
    res.render('Services', { services: 'Express' });
});
/* GET aboutMe page. */
router.get('/views/aboutMe', function (req, res, next) {
    res.render('About Me', { aboutMe: 'Express' });
});
/* GET contact page. */
router.get('/views/Contact', function (req, res, next) {
    res.render('Contact', { contact: 'Express' });
});

module.exports = router;
