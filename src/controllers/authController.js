const root = (req, res) => {
  res.send(
    req.oidc.isAuthenticated()
      ? 'Logged in'
      : 'Logged out <br /><a href="http://localhost:3000/login">Login</a>'
  );
};

const profile = (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
};

const random = (req, res) => {
  res.send(`${Math.random()}`);
};

module.exports = {
  root,
  profile,
  random,
};
