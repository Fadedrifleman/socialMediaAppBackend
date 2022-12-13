require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const main = require("./route/main");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/sma", main);


//server
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`DB connected and Server is listening on port ${port} :)`));
  } catch (error) {
    console.log(":(", error);
  }
};
start();









