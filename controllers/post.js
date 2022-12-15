const User = require("../model/user");
const Post = require("../model/post");

const getPost = async (req, res) => {
    try {
        if (req.body.id) {
            const user = await User.findById(req.body.id);
            await user.populate("post");
            res.status(200).json(user.post);
            return;
        }

        const posts = await Post.find({ access: 'public' }).select('-access');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addPost = async (req, res) => {
    try {
        if (!req.body.id)
            throw new Error("id of the user is required");

        const post = new Post(req.body.post);
        const user = await User.findById(req.body.id).select('username post');
        user.post.push(post);
        await post.save();
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {

    } catch (error) {

    }
};

const deletePost = async (req, res) => {
    try {

    } catch (error) {

    }
};

module.exports = { getPost, addPost, updatePost, deletePost };