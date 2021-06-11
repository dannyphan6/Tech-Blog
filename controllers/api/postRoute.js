const { Post } = require('../../models')
const router = require('express').Router()
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
      // Creates a new post thats added to req.body, along with user_id
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.json(newPost)
    } catch (err) {
        res.json(err)
    }
})

// Edits a single post dependent on the ID
router.put('/updatepost/:id', async (req, res) => {
  console.log("hello world");  
  try {   
    const updatePost = await Post.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }
        )
        console.log(updatePost);
        res.json(updatePost)
    } catch (err) {
        res.json(err)
    }
})

// Deletes a single post dependent on the ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id
      },
    });

    // If there is no post with an id, then send a message 'No post found...'
    if (!deletePost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router 


