const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.get("/", controller.getIndex);

router.get("/sign-up", controller.getSignUp);
router.post("/sign-up", controller.postSignUp);

router.get("/log-in", controller.getLogIn);

module.exports = router;
