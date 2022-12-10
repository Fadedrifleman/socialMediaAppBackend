const User = require("../model/user");
//const { post } = require("../model/post");

const getUser = async(req, res)=>{
    try {
        const user = await User.findById(req.body.id).select('name username bio accountPrivacy');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addUser = async(req, res)=>{
    const user = new User(req.body);
    try {
        const data = await User.find({username: user.username});
        if(data.length<1){
            user.save();
            res.status(200).json(user);
        }
        else
            res.json({message: "Username taken"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//how to check if data already exist in mongodb?

const updateUserProfile = async(req, res)=>{
    
    try {
        
    } catch (error) {
        
    }
}

module.exports  = { getUser, addUser, updateUserProfile };
