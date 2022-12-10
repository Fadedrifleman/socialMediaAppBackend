const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB = (url) => {
    mongoose
    .connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

module.exports = connectDB