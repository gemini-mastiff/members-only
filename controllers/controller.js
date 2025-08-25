const db = require("../storage/queries.js");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const getIndex = (req, res) => {
  res.render("index", { title: "Members Only!", posts: false });
};

const getSignUp = (req, res) => {
  res.render("sign-up", { title: "Sign Up" });
};

const postSignUp = asyncHandler(async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await db.addUser(req.body.username, hashedPassword);
  res.redirect("/sign-up");
});

const getLogIn = (req, res) => {
  res.render("log-in", { title: "Log In" });
};

module.exports = {
  getIndex,
  getSignUp,
  postSignUp,
  getLogIn,
};
