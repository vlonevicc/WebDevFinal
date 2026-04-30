const Recipe = require("../models/recipe");
const PantryItem = require("../models/pantryItem");

// Get recipe
exports.getRecipe = async (req, res) => {
    const recipes = await Recipe.find();
    const pantryItems = await PantryItem.find();

    // Map pantry items to their quantities
    const pantryMap = new Map();
    pantryItems.forEach(item => { pantryMap[item.name.toLowerCase()] = item.quantity; });

    // Map recipes to their ingredients and calculate match score
    const result = recipes.map(recipe => {
    let matchCount = 0;

    recipe.ingredients.forEach(ingredient => {
        if (pantryMap[ingredient.name.toLowerCase()] >= ingredient.quantity) {
            matchCount++;
        }
    });

    return {
        ...recipe._doc,
        matchScore: matchCount / recipe.ingredients.length,
        canMake: matchCount === recipe.ingredients.length
    };
    
});

res.json(result);
};