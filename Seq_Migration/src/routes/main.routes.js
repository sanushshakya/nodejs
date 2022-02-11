const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/income.controller');

router.get('/show-income', IncomeController.renderIndex);

router.get('/income', IncomeController.index);
router.post('/income', IncomeController.create);
router.put('/income/:id', IncomeController.edit);
router.delete('/income/:id', IncomeController.destroy);

module.exports = router;