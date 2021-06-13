const router = require('express').Router();
const { User } = require('../../models');

// User creates a post
router.post('/', async (req, res) => {
  try {
    // Creates a new user and store it into userData
    const userData = await User.create(req.body);

    req.session.save(() => {
      // Saving a session with a user ID IF a user is truly logged in
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Creates a User login
router.post('/login', async (req, res) => {
  try {
    // Find one user in req.body where a username exists
    const userData = await User.findOne({ where: { username: req.body.username } });
    
    // If there is not a username associated with a user, then send the message 'Incorrect...'
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    };

    // Checks to see if the username matches the password in req.body 
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    };

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  };
});

// Route for user to logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  };
});

module.exports = router;