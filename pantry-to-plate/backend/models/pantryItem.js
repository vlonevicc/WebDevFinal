const mongoose = require("mongoose");

// Pantry item schema
const pantrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    threshold: { type: Number, default: 1 }
});

const PantryItem = mongoose.model("PantryItem", pantrySchema);

module.exports = PantryItem;