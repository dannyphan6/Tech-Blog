const router = require('express').Router();
const { Comment, Post, User } = require('../models/index.js');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts from User model with the attributes of username
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
    res.render('allposts', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// Get route for login 
router.get('/login', (req, res) => {
  // If user is logged in, then redirect them to the main page, otherwise render login handlebars
  if (req.session.logged_in) {
    res.redirect('/');
  };
  res.render('login');
});

// Get route for signup
router.get('/signup', (req, res) => {
  console.log('hello world');
  res.render('signup');
});

module.exports = router;