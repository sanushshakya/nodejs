const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login.controller')
const HomeController = require('../controllers/home.controller')
const IncomeController = require('../controllers/income.controller');
const ExpenseController = require('../controllers/expense.controller');
const { checkAuthenticate } = require('../middleware/auth.middleware')

router.get('/login', LoginController.renderLogin)
router.get('/signup', LoginController.renderSignup)
router.get('/', checkAuthenticate, HomeController.renderIndex);
router.get('/income',IncomeController.renderIncome)
router.get('/expense',ExpenseController.renderExpense)



module.exports = router;