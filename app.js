require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => console.log(`App listening on ${PORT}`));
