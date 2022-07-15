const express = require("express");
const path = require("path");
port = 80;

const app = express();
app.use(express.urlencoded());

app.post("/api/question", (req, res) => {
  console.log(req.body);
//   question = req.body.question;
//   name = req.body.name;
  res.status(200);
//   const params = {};
//   res.render("AskQuestion.js", params);
});

app.listen(port, () => {
  console.log("The srever 3000 is listteneing ");
});
