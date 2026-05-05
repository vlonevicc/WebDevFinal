const mongoose = require("mongoose");

// Recipe schema
const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    instructions: { type: String },
    tags: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;