const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Grocery route working' });
});

module.exports = router;