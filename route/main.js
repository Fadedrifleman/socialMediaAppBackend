const express = require('express');
const router = express.Router();

//const { getAllPost, addPost } = require('../controllers/post');
//const { getUserData, addUser, updateUserProfile } = require('../controllers/user');
const { getUser, addUser, updateUserProfile } = require('../controllers/user');

//router.route('/').get(getAllPost).post(addPost)
router.route("/user").get(getUser).post(addUser).patch(updateUserProfile);

module.exports = router
