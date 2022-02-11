const Expense = require('../models/index');

const index = async (req, res) => {
    try {
        const income = await Expense.findAll({
            where: {
                id: 1
            }
        })
        return resStatus(400).send(income);
    }catch(e){
        return res.status(400).send(e.toString());
    }
}

const create = async (req, res) => {
    const {body} = req.body;
    try {
        const newIncome = await Expenses.create(body);
        return res.status(200).send(newIncome);
    }catch(e){
        return res.send(400).send(e.toString());
    }
}

const edit = async () => {

}

const destroy = async () => {

}

module.exports = {
    index,
    create,
    edit,
    destroy
}