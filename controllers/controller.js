const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const getIndex = (req, res) => {
  res.render("index", { title: "Members Only!" });
};

const getSignUp = (req, res) => {
  res.render("sign-up", { title: "Sign Up" });
};

const postSignUp = asyncHandler(async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(`${req.body.username} - ${hashedPassword}`);
  res.redirect("/sign-up");
});

module.exports = {
  getIndex,
  getSignUp,
  postSignUp,
};
