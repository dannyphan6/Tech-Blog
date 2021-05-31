const { Comment } = require('../../models')
const router = require('express').Router()
// Authorizes functions when logged in. Without being logged in, can't do anything
const withAuth = require('../../utils/auth')

// Route for creating a comment, but user must be logged in hence withAuth
router.post('/', withAuth, async (req, res) => {
    try {
        // Creates a comment and adds it to req.body, along with their user_id
        const newComment = await Comment.create({
            ...req.body,
            // user_id is associated with the comment 
            user_id: req.session.user_id,
        });
        res.json(newComment)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router