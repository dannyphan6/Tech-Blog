const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
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
  
      // Pass serialized data and session flag into template
      res.render('allposts', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
     }
    res.render('login')
  })

  router.get('/signup', (req, res) => {
    res.render('signup')
  })

  module.exports = router