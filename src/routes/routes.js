const express = require("express");
const router = express.Router();
const Note = require("./../model/note_model");
router.get("/home", function (req, res) {
  res.send("Welcome to home page");
});
router.get("/list", async function (req, res) {
  var note = await Note.find();
  res.json(note);
});
router.get("/list/:id", async function (req, res) {
  var note = await Note.find({ id: req.params.id });
  res.json(note);
});
router.post("/add", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });
  const newNote = new Note({
    id: req.body.id,
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
  const response = { message: "New Node created", status: "200" };
  res.json(response);
});

router.post("/delete", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });
  const response = { message: "Node Deleted", status: "200" };
  res.json(response);
});

module.exports = router;
