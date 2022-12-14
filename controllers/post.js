const User = require("../model/user");
const Post = require("../model/post");

const getPost = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

const addPost = async(req, res)=>{
    const post = new Post(req.body.post);
    try {
        const user = await User.findById(req.body.id);
        user.post.push(post)
        post.save()
        user.save()
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updatePost = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

const deletePost = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

module.exports = { getPost, addPost, updatePost, deletePost };