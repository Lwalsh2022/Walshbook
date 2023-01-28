// let's get it
const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend

}   = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId GET one user, PUT update user, DELETE user
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

    module.exports = router;