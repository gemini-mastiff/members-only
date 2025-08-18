const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Members Only!" });
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up", { title: "Sign Up" });
});
router.post("/sign-up", (req, res) => {
  console.log(`${req.body.username} - ${req.body.password}`);
  res.redirect("/sign-up");
});

module.exports = router;
