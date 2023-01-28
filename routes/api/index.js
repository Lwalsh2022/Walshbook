// more coffee and energy balls for the win

const router = require('express').Router();
const userRoutes = require('./routes/api/userRoutes.js');
const thoughtRoutes = require('./routes/api/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;