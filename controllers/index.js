const router = require('express').Router();

const allApiRoutes = require('./api');
const dashBoardRoute = require('./dashboardRoute');

router.use('/', dashBoardRoute);
router.use('/api', allApiRoutes);

module.exports = router;