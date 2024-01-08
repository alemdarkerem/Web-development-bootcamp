import express from "express";

const app = express();
const port = 3000;
var weekD = "";
var status = "";


app.get("/", (req, res) => {
    const today  = new Date();
    const day = today.getDay();   

    let type = "weekday";
    let advice = "work hard!"

    if (day === 0 || day === 6) {
        type = "weekend"
        advice = "have fun!"
    } 
    res.render("index.ejs",
    {
        dayType: type,
        advice: advice
    })
})



app.listen(port , () => {
    console.log(`Server is now running on ${port}`);
} );