import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "kAnarya1907!";
var userPassword = "";

app.use(bodyParser.urlencoded({ extended: true}));

function checkPassword (req, res, next) {
    console.log(req.body);
    userPassword = req.body['password'];
    next();
}

app.use(checkPassword);


app.post("/check", (req, res) => {
    if (userPassword === password) {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.sendFile(__dirname + '/public/index.html');
    }
});


app.get("/", (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () =>{
    console.log(`Server is currently running at ${port}`);
});