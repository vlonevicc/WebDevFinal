const mongoose = require("mongoose");

// Recipe schema
const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [
        {
            name: String,
            quantity: String
        }
    ],
    instructions: String,
    tags: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;