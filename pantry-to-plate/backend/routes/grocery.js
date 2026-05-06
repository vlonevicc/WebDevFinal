const express = require('express');
const router = express.Router();
const groceryController = require('../controllers/groceryController');

router.get('/list', groceryController.getGroceryItem);
router.post('/add', groceryController.addGroceryItem);
router.delete('/delete/:id', groceryController.deleteGroceryItem);
router.put('/:id', groceryController.updateGroceryItems);

module.exports = router;