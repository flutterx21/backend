const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require("./model/note_model");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoDBPath =
  "mongodb+srv://jayisampelliwar:Jay112233@cluster0.iqnc3pi.mongodb.net/notesdb";
mongoose.connect(mongoDBPath).then(function () {
  app.get("/", function (req, res) {
    res.send("Welcome to my API");
  });
});

const newRouter = require("./routes/routes");
app.use("/home", newRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server stated at port " + `${PORT}`);
});
