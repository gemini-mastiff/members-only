const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Members Only!" });
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up", { title: "Sign Up" });
});
router.post("/sign-up", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(`${req.body.username} - ${hashedPassword}`);
  res.redirect("/sign-up");
});

module.exports = router;
