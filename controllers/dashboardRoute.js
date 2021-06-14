const router = require('express').Router();
const { Comment, User, Post } = require('../models/');
const withAuth = require('../utils/auth');

// Get route to render dashboard handlebar
router.get('/', withAuth, async (req, res) => {
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
  });
});

router.get('/newpost/:id', withAuth, async (req, res) => {
  const singlePostData = await Post.findOne({
    where: {
      id: req.params.id
    },

    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });

  const posts = singlePostData.get({ plain: true });

  res.render('singlepost', {
    posts,
    logged_in: req.session.logged_in
  });
});

// Get route to render newpost handlebar
router.get('/newpost', withAuth, (req, res) => {
  res.render('newpost', {
    logged_in: req.session.logged_in
  });
});

router.get('/updatepost/:id', withAuth, async (req, res) => {
  const updateSinglePost = await Post.findOne({
    where: {
      id: req.params.id
    },

    include: [
      {
        model: User, Post,
        attributes: ['username'],
      },
    ],
  });

  const posts = updateSinglePost.get({ plain: true });

  res.render('updatepost', {
    posts,
    logged_in: req.session.logged_in
  });
});

module.exports = router;