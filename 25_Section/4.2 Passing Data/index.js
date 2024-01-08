import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var title = "Enter your name below";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    h1: title,
  })
});

app.post("/submit", (req, res) => {
  const numberOfLetters = req.body['fName'].length + req.body['lName'].length;
  res.render("index.ejs", {
    h1: `There are ${numberOfLetters} letters in your name.`
  })
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
