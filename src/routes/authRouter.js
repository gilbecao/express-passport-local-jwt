const { requiresAuth } = require('express-openid-connect');
const { Router } = require('express');
const controller = require('../controllers/authController');

const authRouter = Router();

// req.isAuthenticated is provided from the auth router
authRouter.route('/').get(controller.root);

authRouter.route('/profile').get(requiresAuth(), controller.profile);

authRouter.route('/random').get(controller.random);

module.exports = authRouter;
