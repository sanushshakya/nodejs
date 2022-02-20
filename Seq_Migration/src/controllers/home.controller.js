const {User, Income, Expense} = require('../models');
const {
    calculateTotalIncome,
    calculateTotalExpense,
  } = require("../utils/calculateTotal");

// const renderIndex = async (req, res) => {
//     const income = await Income.findAll();
//     const expense =  await Expense.findAll();
//     const total = {
//         income: calculateTotalIncome(income),
//         expense: calculateTotalExpense(expense),
//       };

//     res.render('home', {
//         partialPrefix: 'income partial',
//         income,
//         expense,
//         total
//     });
// }

const renderIndex = async (req, res) => {
  try{
    
    const user = await User.findAll({
      raw: true,
      include: [
        {
          model: Income,
          as: 'Income',
         
        },
        {
          model: Expense,
          as: 'Expense',
         
        }
      ]
    })
    JSON.stringify(user);
    console.log(user)
    res.render('home', {
      user
    });
  }catch(e){
    return res.status(404).send(e.toString());
  }
}

module.exports = {
    renderIndex
}