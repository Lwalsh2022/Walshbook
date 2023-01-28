const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts GET all thoughts, POST create thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT, DELETE by id
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

    module.exports = router;
