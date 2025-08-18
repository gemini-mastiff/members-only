const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Members Only!" });
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up", { title: "Sign Up" });
});

module.exports = router;
