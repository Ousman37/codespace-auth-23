// database.js

const mongoose = require('mongoose');

const MONGODB_URL = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // add this to enable index creation
      useFindAndModify: false, // add this to disable deprecated find and modify methods
    })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch(error => {
      console.log(`MongoDB connection error: ${error}`);
      process.exit(1);
    });
};
