const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Get route to render dashboard handlebar
router.get('/', withAuth, (req, res) => {
    console.log("hello world");
    res.render('dashboard', {
        logged_in: req.session.logged_in
    })
})

// Get route to render newpost handlebar
router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost', {
        logged_in: req.session.logged_in
    })
})

module.exports = router