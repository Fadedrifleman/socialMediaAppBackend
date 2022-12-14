const User = require("../model/user");
const Post = require("../model/post");
const Comment = require("../model/comment");

const getComment = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

const addComment = async(req, res)=>{
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

const updateComment = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

const deleteComment = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

module.exports = { getComment, addComment, updateComment, deleteComment };