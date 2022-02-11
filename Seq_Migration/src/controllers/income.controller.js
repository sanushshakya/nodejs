const {Income, Expense} = require('../models');

const index = async (req, res) => {
    try {
        const income = await Income.findAll({
            // include: {
            //     model: Expense,
            //     as: "expenses",
            // }
        })
        return res.status(400).send(income);
    }catch(e){
        return res.status(400).send(e.toString());
    }
}

const renderIndex = async (req, res) => {
    const income = await Income.findAll()
    res.render('home', {
        partialPrefix: 'income partial',
        income
    });
}

const create = async (req, res) => {
    const body = req.body;
    try {
        const newIncome = await Income.create(body);
        return res.status(200).send(newIncome);
    } catch (e) {
        return res.status(400).send(e.toString());
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {Source, Categories, Description, Amount} = req.body;
    try{
        await Income.update({
            Source: Source,
            Categories: Categories,
            Description: Description,
            Amount: Amount
        },
        {
        where: {
            id:id
        }
    });
    return res.status(200).send({
        "message": "Income updated successfully."
    })
    } catch (e) {
        return res.status(400).send(e.toString());
    }
}

const destroy = async (req, res) => {
    const {id} = req.params;
    try {
        await Income.destroy({
            where: {
                id
            }
        });
        return res.status(200).send({
            "message": "Income deleted successfully."
        })
    } catch (e) {
        return res.status(404).send(e.toString())
    }   
}


module.exports = {
    index,
    create,
    edit,
    destroy,
    renderIndex
}