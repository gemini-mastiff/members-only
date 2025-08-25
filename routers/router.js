const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.get("/", controller.getIndex);

router.get("/sign-up", controller.getSignUp);
router.post("/sign-up", controller.postSignUp);

router.get("/log-in", controller.getLogIn);
router.post("/log-in", controller.postLogIn);

router.get("/log-out", controller.getLogOut);

module.exports = router;
