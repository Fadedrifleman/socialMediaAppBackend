const User = require("../model/user");
const Post = require("../model/post");
const Comment = require("../model/comment");

const getComment = async(req, res)=>{
    try {
        const post = await Post.findById(req.body.id);
        await post.populate("comment");
        res.status(200).json(post.comment);
    } catch (error) {
        
    }
};

const addComment = async(req, res)=>{
    try {
        if (!req.body.id)
            throw new Error("id of the post is required");

        const comment = new Comment(req.body.comment);
        const post = await Post.findById(req.body.id);
        post.comment.push(comment);
        await comment.save();
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateComment = async(req, res)=>{
    try {
        const comment = await Comment.findByIdAndUpdate(req.body.id, {$set: req.body}, {new: true});
        res.status(200).json(comment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const deleteComment = async(req, res)=>{
    try {
        const comment = await Comment.findByIdAndDelete(req.body.id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getComment, addComment, updateComment, deleteComment };