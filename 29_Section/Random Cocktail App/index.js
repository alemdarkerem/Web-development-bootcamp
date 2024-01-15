import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = (process.env.PORT || 3000);
const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for button press...", name: "", glass: "", img: "", Ingredient1: "", Mesaure1: "",Instructions: ""});
});

app.post("/random-cocktail", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const cocktail = result.data.drinks[0];
    const { strDrink, strGlass, strDrinkThumb, strInstructions } = cocktail;

    const ingredients = [];
    const measures = [];

    // Iterate through ingredients and measures dynamically
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];

      if (ingredient && measure) {
        ingredients.push(ingredient);
        measures.push(measure);
      } else {
        break; // Stop if either ingredient or measure is not present
      }
    }
    res.render("index.ejs", { 
        content: "",
        name: strDrink,
        glass: strGlass,
        img : strDrinkThumb,
        ingredients: ingredients || [],
        measures:  measures || [],
        Instructions: strInstructions

      });
  } catch (error) {
    console.log(error.message)
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
