const router = require('express').Router();
const userRoute = require('./userRoute');
const projectRoute = require('./projectRoutes');

router.use('/users', userRoute);
router.use('/projects', projectRoute);

module.exports = router;