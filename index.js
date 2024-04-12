// write hello world response nodejs express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World", name: "My name is Abhaya Kumar Sahoo" });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
