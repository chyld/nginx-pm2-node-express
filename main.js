const express = require("express");
const app = express();
const port = process.env["PORT"];

app.get("/", (req, res) => res.json({ hello: "world", port }));

app.get("/add/:x/:y", (req, res) => {
  const sleep = Math.random() * 3000;
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  setTimeout(() => {
    res.json({ sum: x + y });
  }, sleep);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
