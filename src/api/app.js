const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.get('/users', rescue(UserController));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
  });

app.use(errorMiddleware); 

module.exports = app;
