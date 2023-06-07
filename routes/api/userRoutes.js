const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).put(updateUser);

//delete user
router.delete("/:userId", deleteUser);

// /api/user/:userId/friends
router.route("/:userId/friends/:friendId").post(addFriend);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
