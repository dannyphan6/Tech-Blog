const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Get route to render dashboard handlebar
router.get('/', withAuth, async (req, res) => {
    console.log("hello world");
    const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
    // Serialize data so the template can read it
    const posts = postData.map((posts) => posts.get({ plain: true }));

    res.render('dashboard', {
        posts,
        logged_in: req.session.logged_in
    })
})

router.get('/singlepost')

// Get route to render newpost handlebar
router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost', {
        logged_in: req.session.logged_in
    })
})

module.exports = router