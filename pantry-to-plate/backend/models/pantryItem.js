const mongoose = require("mongoose");

// Pantry item schema
const pantrySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    threshold: Number
});

const PantryItem = mongoose.model("PantryItem", pantrySchema);

module.exports = PantryItem;