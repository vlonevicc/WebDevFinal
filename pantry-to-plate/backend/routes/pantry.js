const express = require('express');
const router = express.Router();
const pantryController = require('../controllers/pantryController');

router.get('/list', pantryController.getPantryItems);
router.post('/add', pantryController.addPantryItem);
router.delete('/delete/:id', pantryController.deletePantryItem);
router.put('/:id', pantryController.updatePantryItem);
router.get('/low-stock', pantryController.getLowStockItems);

router.get('/', (req, res) => {
  res.json({ message: 'Pantry route working' });
});

module.exports = router;