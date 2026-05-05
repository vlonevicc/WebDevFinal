const express = require('express');
const router = express.Router();
const groceryController = require('../controllers/groceryController');

router.get('/list', groceryController.getGroceryList);
router.post('/add', groceryController.addGroceryItem);
router.delete('/delete/:id', groceryController.deleteGroceryItem);
router.put('/:id', groceryController.updateGroceryItems);

router.get('/', (req, res) => {
  res.json({ message: 'Grocery route working' });
});

module.exports = router;