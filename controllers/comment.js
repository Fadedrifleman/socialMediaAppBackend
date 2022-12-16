const User = require("../model/user");
const Post = require("../model/post");
const Comment = require("../model/comment");

const getComment = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

const addComment = async(req, res)=>{
    const comment = new Comment(req.body.comment);
    try {
        const post = await Post.findById(req.body.id);
        post.post.push(post);
        await comment.save();
        await post.save();
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