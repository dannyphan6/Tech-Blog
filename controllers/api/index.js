const router = require('express').Router()
const commentRoutes = require('./commentRoute')
const postRoutes = require('./postRoute')
const userRoutes = require('./userRoute')

router.use('/comment', commentRoutes)
router.use('/post', postRoutes)
router.use('/user', userRoutes)

module.exports = router