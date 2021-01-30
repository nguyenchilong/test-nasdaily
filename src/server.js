
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const router = require('./routes');
require('dotenv').config();

const app = express();

// apply for all requests income
app.use(rateLimit({
    windowMs: process.env.RATE_LIMIT_TIME * 1000, // 10 second
    max: process.env.RATE_LIMIT_NUMBER,
    message: `Too many accounts created from this IP, please try again after ${process.env.RATE_LIMIT_TIME} seconds`
}));
// use third-party middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

// init all routes with prefix /api
app.use('/api', router);

/**
 * handle error requests
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const notFound = (req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    error: 'Not Found',
  });
};

/**
 * handle error in controller
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const handleError = (error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500);
  res.json({
    message: error.message || 'Failed: Unknown Error',
    msg: error.msg,
    stack: error.stack,
  });
};
app.use(notFound);
app.use(handleError);

// Run the server
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port: ${PORT}`);
});
