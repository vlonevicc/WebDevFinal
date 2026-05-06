const express = require('express');
const router = express.Router();
const pantryController = require('../controllers/pantryController');

router.get('/', pantryController.getPantryItems);
router.post('/add', pantryController.addPantryItem);
router.delete('/delete/:id', pantryController.deletePantryItem);
router.put('/:id', pantryController.updatePantryItem);
router.get('/low-stock', pantryController.getLowStockItems);

module.exports = router;