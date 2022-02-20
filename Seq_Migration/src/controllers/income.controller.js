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
        const { UserId, Source, Categories, Description, Amount } = req.body;
        const income = await Income.create({
            UserId: UserId,
            Source: Source,
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
// renderIndex();

module.exports = {
    renderIncome,
    createIncome
}