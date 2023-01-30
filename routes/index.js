const router = require('express').Router();

// Import the API routes from /api/index.js
const apiRoutes = require('./api');

// Add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;