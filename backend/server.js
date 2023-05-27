const express = require("express");
const connectDB = require("./Config/db");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

const cors = require("cors");

connectDB();
const app = express();
app.use(express.json()); // to accept json data;
app.use(cors());

app.use("api/user", userRoutes);
// app.use("/api/chat",chatRoutes);
// app.use("/api/message",messageRoutes);

//error handling middlewares;
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
