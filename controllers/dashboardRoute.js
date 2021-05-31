const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Get route to render dashboard handlebar
router.get('/', withAuth, (req, res) => {
    console.log("hello world");
    res.render('dashboard')
})

// Get route to render newpost handlebar
router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost')
})

module.exports = router