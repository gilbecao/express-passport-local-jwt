require('dotenv').config();
const express = require('express');

const debug = require('debug')('server');
const morgan = require('morgan');
const { auth } = require('express-openid-connect');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'j8IpqFYlpmCtpAnXfXuujlGY5CdrRd6q',
    issuerBaseURL: 'https://gilbecao.auth0.com',
  })
);

const authRouter = require('./src/routes/authRouter');

app.use('/', authRouter);

app.listen(port, debug(`app is running on port ${port}`));
