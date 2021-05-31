const { Comment } = require('../../models')
const router = require('express').Router()
// Authorizes functions when logged in. Without being logged in, can't do anything
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
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