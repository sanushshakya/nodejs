const IT = require('../models/it.models');
const knex = require('../knex');

const index = async (req, res) => {
    return res.status(200).send(await IT.getUsers());
}

const create = async (req, res) => {
    const { POSITION, STATUS, USER } = req.body;
    try{
        await IT.createUsers(POSITION, STATUS, USER );
        return res.status(200).send({
            "message": "User created successfully"
        });
    }catch(error){
        return res.status(200).send({
            "message": "User doesn't exists"
        });
    }
} 

const read = async (req, res) => {
    const {ID} = req.params;
    try{
        return res.status(200).send(await IT.readUsers(ID));
    }catch(error){
        return res.status(200).send({
            "message":"User not Exists"
        })
    }   
}


module.exports ={
    index,
    create,
    read
}