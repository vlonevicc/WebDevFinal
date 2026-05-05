const mongoose = require('mongoose');
require('dotenv').config();

console.log("ENV CHECK:", process.env.MONGO_URI);

const GroceryItem = require('./models/groceryItem');
const PantryItem = require('./models/pantryItem');
const Recipe = require('./models/recipe');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error(err));

const pantryData = [
  { name: "milk", quantity: 1, threshold: 2 },
  { name: "eggs", quantity: 12, threshold: 6 },
  { name: "flour", quantity: 2, threshold: 1 },
  { name: "sugar", quantity: 1, threshold: 1 },
  { name: "butter", quantity: 0, threshold: 1 }
];

const groceryData = [
  { name: "butter", quantity: 2, linkedRecipe: "Pancakes" },
  { name: "chicken", quantity: 1, linkedRecipe: "Grilled Chicken" },
  { name: "lettuce", quantity: 1, linkedRecipe: "Salad" }
];

const recipeData = [
  {
    name: "Pancakes",
    ingredients: [
      { name: "flour", quantity: 1 },
      { name: "milk", quantity: 1 },
      { name: "eggs", quantity: 2 },
      { name: "butter", quantity: 1 }
    ],
    instructions: "Mix ingredients and cook on skillet.",
    tags: ["breakfast", "easy"]
  },
  {
    name: "Grilled Chicken",
    ingredients: [
      { name: "chicken", quantity: 1 },
      { name: "salt", quantity: 1 }
    ],
    instructions: "Season chicken and grill until fully cooked.",
    tags: ["dinner", "protein"]
  },
  {
    name: "Simple Salad",
    ingredients: [
      { name: "lettuce", quantity: 1 },
      { name: "olive oil", quantity: 1 }
    ],
    instructions: "Mix ingredients and serve fresh.",
    tags: ["healthy", "quick"]
  }
];

const seedDB = async () => {
  try {
    await GroceryItem.deleteMany({});
    await PantryItem.deleteMany({});
    await Recipe.deleteMany({});

    console.log('Old data cleared');

    await PantryItem.insertMany(pantryData);
    await GroceryItem.insertMany(groceryData);
    await Recipe.insertMany(recipeData);

    console.log('Database seeded successfully');

    mongoose.connection.close();
  } catch (error) {
    console.error('Seeding error:', error);
    mongoose.connection.close();
  }
};

seedDB();