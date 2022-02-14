const {Income, Expense} = require('../models');
const {
    calculateTotalIncome,
    calculateTotalExpense,
  } = require("../utils/calculateTotal");

const renderIndex = async (req, res) => {
    const income = await Income.findAll();
    const expense =  await Expense.findAll();
    const total = {
        income: calculateTotalIncome(income),
        expense: calculateTotalExpense(expense),
      };

    res.render('home', {
        partialPrefix: 'income partial',
        income,
        expense,
        total
    });
}

module.exports = {
    renderIndex
}