const router = require('express').Router();

const allApiRoutes = require('./api');
const homeRoutes = require('./homeRoute');

router.use('/', homeRoutes);
router.use('/api', allApiRoutes);

module.exports = router;