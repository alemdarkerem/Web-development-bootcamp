import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><p>My Name is Kerem</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1><p>+90 537 798 48 75</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1><p>Junior Web Developer</p>");
})



app.listen(port, () => {
    console.log(`Server is currently running on ${port}.`);
})