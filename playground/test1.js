const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


var database = 'mongodb://localhost:27017/meanauth';
var secret = 'yoursecret'


// User Schema
const UserSchema = mongoose.Schema({
    name: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  const User = mongoose.model('User', UserSchema);

mongoose.connect(database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ database);
});
  
const getUserByUsername = function(username, callback){
    const query = {username: username}
    User.find(query, callback);
  }

  User.getUserByUsername(john, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

