// more coffee and energy balls for the win

const router = require('express').Router();
const userRoutes = require('./../routes/api/userRoutes');
const thoughtRoutes = require('./../Walshbook/routes/api/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;