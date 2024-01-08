const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://admin:secret@localhost:4000")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log("mongoDB error: ", err));

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);

app.get("/", (req, res) => {
  res.send("Hello World From hehe!");
});

app.get("/:name", async (req, res) => {
  const a = await Kitten.create({ name: req.params.name });
  console.log({ a });

  res.send(`Created ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
