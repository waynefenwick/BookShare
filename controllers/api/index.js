const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const post, comment/ book rout andf file 

router.use('/users', userRoutes)

module.exports = router;