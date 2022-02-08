const Admin = require('../models/admin.models');
const knex = require('../knex');

const index = async (req, res) => {
    return res.status(200).send(await Admin.getUsers());
}

const create = async (req, res) => {
    const { POSITION, ASSIGNED, USER } = req.body;
    try{
        await Admin.createUsers(POSITION, ASSIGNED, USER );
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
        return res.status(200).send(await Admin.readUsers(ID));
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