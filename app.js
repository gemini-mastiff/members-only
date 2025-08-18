require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => console.log(`App listening on ${PORT}`));
