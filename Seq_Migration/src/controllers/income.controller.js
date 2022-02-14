const {Income} = require('../models');

const renderIncome = async (req, res) => {
    try {
        res.render('income')
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong", error });
      }
}

const createIncome = async (req, res) => {
    try {
        console.log(req.body);
        const { Source, Categories, Description, Amount } = req.body;
        const income = await Income.create({
            Source: Source,
            Categories: Categories,
            Description: Description,
            Amount: Amount
        });
        console.log(income);
        res.redirect("/");
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong", error });
      }
}
// renderIndex();

module.exports = {
    renderIncome,
    createIncome
}