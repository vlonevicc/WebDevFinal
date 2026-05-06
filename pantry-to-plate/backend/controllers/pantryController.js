const PantryItem = require("../models/pantryItem");

// Get all pantry items
exports.getPantryItems = async (req, res) => {
    try {
        const items = await PantryItem.find();
        res.json(items);
    } catch (error) {
        console.error("Error fetching pantry items:", error);
        res.status(500).json({ message: error.message });
    }
};

// Add new pantry items
exports.addPantryItem = async (req, res) => {
    const { name, quantity } = req.body;

    try {
        const newItem = new PantryItem({ name, quantity });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update item (quantity, threshold)
exports.updatePantryItem = async (req, res) => {
    try {
        const updatedItem = await PantryItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete item
exports.deletePantryItem = async (req, res) => {
    try {
        await PantryItem.findByIdAndDelete(req.params.id);
        res.json({ message: "Item deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get low stock items
exports.getLowStockItems = async (req, res) => {
    try {
        const lowStockItems = await PantryItem.find({ $expr: { $lte: ["$quantity", "$threshold"] } });
        res.json(lowStockItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
