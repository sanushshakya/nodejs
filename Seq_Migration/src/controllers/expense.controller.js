const { Expense } = require('../models');


const renderExpense = async (req, res) => {
    try {
        res.render('expense')
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong", error });
      }
}

const createExpense = async (req, res) => {
    try {
        console.log(req.body)
        const { Name, Categories, Description, Amount } = req.body;
        const expense = await Expense.create({
            Name:Name,
            Categories: Categories,
            Description: Description,
            Amount: Amount
        });
        res.redirect("/");
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong", error });
      }
}

module.exports = {
    renderExpense,
    createExpense
}