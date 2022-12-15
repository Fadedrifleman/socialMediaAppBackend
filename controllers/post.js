const User = require("../model/user");
const Post = require("../model/post");
const post = require("../model/post");

const getPost = async(req, res)=>{
    if(req.body.id){
        try {
            const user = await User.findById(req.body.id).select('-_id post');
            const posts = await user.post.map(async(postID) => {
                const result = await Post.findById(postID).select('-_id title body');
                return result;
            });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    try {
        const posts = await Post.find({access: 'public'}).select('-access');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addPost = async(req, res)=>{
    const post = new Post(req.body.post);
    const user = await User.findById(req.body.id).select('username post');
    try {
        user.post.push(post);
        post.save();
        user.save();
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