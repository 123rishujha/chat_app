const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")

const { chats } = require("./data/data");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.end("working fine");
});

app.get("/api/chat", (req, res) => {
  res.send({success:true,result:chats});
});

app.listen(5000, () => {
  console.log("server is running on port", 5000);
});
