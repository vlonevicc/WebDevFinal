const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getRecipe);

router.get('/', (req, res) => {
  res.json({ message: 'Recipes route working' });
});

module.exports = router;