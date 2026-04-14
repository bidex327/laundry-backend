require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

connectDB();





app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended: true }));

app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Welcome my API");
});



module.exports = app;
