const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.end("working fine");
});

app.get("/api/get", (req, res) => {
  res.end(chats);
});

app.listen(5000, () => {
  console.log("server is running on port", 5000);
});
