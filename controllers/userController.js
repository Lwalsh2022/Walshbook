const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getAllUser(req, res) {
        User.find({})
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    },

    // get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id })
        .populate("thoughts")
        .populate("friends")
        .select("-__v")
        .then((user)) =>
        !user ? res.status(404).json({ message: "No user found with this id" }) : res.json(user)
        .catch((err) => res.json(err));
    },

    // create user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // update user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: reqparams.userId },
            {$set: req.body },
            {runValidators: true, new: true }
        )
        .then((user) => {
            !user ? res.status(404).json({ message: "No user found with this id" }) : res.json(user)
        })
        .catch((err) => res.json(err));
    },

    // delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => {
            !user ? res.status(404).json({ message: "No user found with this id" }) : res.json(user)
             :Thought.deleteMany({ _id: { $in: user.thoughts } })
        })
        .then(() => {
            res.json({ message: "User deleted" });
            .catch((err) => res.status(500).json(err));
        }
    }


// add friend
addFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        {runValidators: true, new: true }
    )
    .then((user) => {
        !user ? res.status(404).json({ message: "No user found with this id" }) : res.json(user)
    })
    .catch((err) => res.status(500).json(err));
};

// delete friend
deleteFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        {runValidators: true, new: true }
    )
    .then((user) => {
        !user ? res.status(404).json({ message: "No user found with this id" }) : res.json(user)
    }
    .catch((err) => res.status(500).json(err));
};











        


