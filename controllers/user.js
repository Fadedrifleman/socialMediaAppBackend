const User = require("../model/user");

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.body.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const data = await User.find({ username: user.username });
        if (data.length < 1) {
            await user.save();
            res.status(200).json(user);
        }
        else
            res.json({ message: "Username taken" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.id, {$set: req.body}, {new: true});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.body.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = { getUser, addUser, updateUserProfile, deleteUser };
