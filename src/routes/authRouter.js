const { requiresAuth } = require('express-openid-connect');
const { Router } = require('express');

const authRouter = Router();

// req.isAuthenticated is provided from the auth router
authRouter.route('/').get((req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

authRouter.route('/profile').get(requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

authRouter.route('/random').get((req, res) => {
  res.send(`${Math.random()}`);
});

module.exports = authRouter;
