const express = require("express");

const app = express();
const port = 5100;

app.get("/", (req, res) => {
  res.send("My Phone all Information will Coming Soon.....");
});

app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`);
});
