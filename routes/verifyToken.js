const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // console.log(req.headers);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};
const verifyToken_Auth = (req, res, next) => {
  verifyToken(req, res, () => {
   //console.log(req.user, req.params.id);
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed");
    }
  });
};

const verifyToken_Admin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed");
    }
  });
};
module.exports = { verifyToken, verifyToken_Auth, verifyToken_Admin };
