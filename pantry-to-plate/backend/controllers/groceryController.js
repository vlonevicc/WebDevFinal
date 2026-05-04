const GroceryItem = require("../models/groceryItem");
const PantryItem = require("../models/pantryItem");

// add a grocery item
exports.addGroceryItem = async (req, res) => {

    const {name, quantity, linkedRecipe} = req.body;

    try {
        const newItem = new GroceryItem({name, quantity, linkedRecipe});
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// get grocery items
exports.getGroceryItem = async(req,res) => {
    try {
        const items = await GroceryItem.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({message: "Erro fetching grocery items"});
    }
}

// update the grocery item by ID
exports.updateGroceryItems = async(req,res) => {
    try {
        const updatedItems = await GroceryItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(updatedItems);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// delete a grocery item by ID
exports.deletePantryItem = async(req,res) => {
    try {
        await GroceryItem.findByIdAndDelete(req.params.id);
        res.json({message: "Item Deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};



