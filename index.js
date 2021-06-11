const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const passport = require('passport');
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');

require('dotenv').config();

require('./src/passport/jwt.strategy');
require('./src/passport/local.strategy');

require('./src/config/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);
app.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  userRoutes,
);

app.listen(port, debug(`server is running on port ${port}`));
