const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log("hello world");
    res.render('dashboard')
})

router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost')
})

module.exports = router