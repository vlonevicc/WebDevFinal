const mongoose = require("mongoose");

// Grocery item schema
const grocerySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    linkedRecipe: String
});

const GroceryItem = mongoose.model("GroceryItem", grocerySchema);

module.exports = GroceryItem;
