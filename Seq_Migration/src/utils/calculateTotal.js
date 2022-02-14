// const calculateTotal = (records) => {
//   let total = 0;
//   records.forEach((record) => {
//     if (record.type === "income") total += record.amount;
//     else if (record.type === "expense") total -= expense.amount;
//     else throw new Error("unexpected record type");
//   });
//   return total;
// };

const calculateTotalIncome = (income) => {
  let total = 0;
  income.forEach((income) => {
    total += income.Amount;
  });
  return total;
};

const calculateTotalExpense = (expense) => {
  let total = 0;
  expense.forEach((expense) => {
    total += expense.Amount;
  });
  return total;
};

module.exports = {
  calculateTotalExpense,
  calculateTotalIncome,
};