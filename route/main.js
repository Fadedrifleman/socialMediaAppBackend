const express = require('express');
const router = express.Router();

const { getUser, addUser, updateUserProfile, deleteUser } = require('../controllers/user');
const { getPost, addPost, updatePost, deletePost } = require('../controllers/post');
const { getComment, addComment, updateComment, deleteComment } = require('../controllers/comment')

router.route("/user").get(getUser).post(addUser).put(updateUserProfile).delete(deleteUser);
router.route("/post").get(getPost).post(addPost).put(updatePost).delete(deletePost);
router.route("/comment").get(getComment).post(addComment).put(updateComment).delete(deleteComment);

module.exports = router
