const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

//database

const mongoose = require("mongoose");
const userSh = require("./models/userModel");
dotenv.config();

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((err) => console.log("Error connecting to db"));

//schema

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const key = req.body.key;

  const check = await userSh.exists({ username });
  const data = new userSh({
    username: username,
    key: key,
  });
  if (check) {
    res.send("Error");
  } else {
    data.save();
    res.send("All Signed Up");
  }
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
