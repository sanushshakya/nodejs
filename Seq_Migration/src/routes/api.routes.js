const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home.controller')
const IncomeController = require('../controllers/income.controller');
const ExpenseController = require('../controllers/expense.controller');

router.get('/income',IncomeController.renderIncome)
router.post('/income', IncomeController.createIncome);
router.get('/expense',ExpenseController.renderExpense)
router.post('/expense', ExpenseController.createExpense);


module.exports = router;