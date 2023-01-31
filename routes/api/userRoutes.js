// let's get it
const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

}   = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

// /api/users/:userId GET one user, PUT update user, DELETE user
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteUser);

    module.exports = router;