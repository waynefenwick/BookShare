const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// const post, comment/ book rout and file 


router.use('/users', userRoutes);
router.use('/posts', postRoutes)
router.use('/comments', commentRoutes)

module.exports = router;