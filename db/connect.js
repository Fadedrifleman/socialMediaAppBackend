const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB = async (url) => {
    await mongoose.connect(url);

    //{useNewUrlParser: true, useUnifiedTopology: true,}
    //these are not valid mongoose ConnectOptions, passing this object causes problem with the await
};

module.exports = connectDB