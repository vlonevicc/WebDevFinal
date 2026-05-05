const mongoose = require("mongoose");

// Grocery item schema
const grocerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    linkedRecipe: { type: String }
});

const GroceryItem = mongoose.model("GroceryItem", grocerySchema);

module.exports = GroceryItem;
