import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var blogText = "";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render('index.ejs');
})


app.post("/submit", (req, res) => {
     res.render("index.ejs", {
     blogText: req.body['text'],
    })
})

app.post("/delete", (req, res) => {
    res.render("index.ejs", {
       blogText: "" 
    })
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});