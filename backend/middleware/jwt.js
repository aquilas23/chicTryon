const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  // console.log(token);
  if (!token) {
    console.log("session expired")
    // next();
    return res.send("Session expired");
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("this is inside JWT",decoded);
      req.user = decoded.id;
      next();
      // return res.send("success verified");
    } catch (err) {
      // console.log(err)
      // console.log("token expired");
      return res.status(400).send("something went wrong");
    }
  }
  console.log(token);
};

module.exports = { auth };
