const User = require('../models/models');
const knex = require('../knex');
// const encryptPass = require('crypto-js');
const encryptPass = require('bcrypt');
const saltRounds = 10;

const index = async (req, res) => {
    return res.status(200).send(await User.getUsers());
}

const create = async (req, res) => {
    const { NAME, EMAIL, PASSWORD, ADDRESS } = req.body;
    // const HASH =  encryptPass.AES.encrypt(JSON.stringify(PASSWORD), 'key=123').toString();
    const HASH = encryptPass.hashSync(PASSWORD, saltRounds);
    // let HASH;
    // encryptPass.hash(PASSWORD, saltRounds, (err, hash) => {
    //     HASH = hash;
    //  });
    try{
        await User.createUsers(NAME, EMAIL, HASH, ADDRESS);
        return res.status(200).send({
            "message": "User created successfully"
        });
    }catch(error){
        return res.status(200).send({
            "message": "User Exists"
        });
    }
} 

// const read = async (req, res) => {
//     const {ID} = req.params;
//     try{
//         return res.status(200).send(await User.readUsers(ID));
//     }catch(error){
//         return res.status(200).send({
//             "message":"User not Exists"
//         })
//     }   
// }

const read = async (req, res) => {
    // const {ID} = req.params;
    const {EMAIL} = req.body;
    try{
        return res.status(200).send(await User.readUsers(EMAIL));
    }catch(error){
        return res.status(200).send({
            "message":"User not Exists"
        })
    }   
}

const update = async (req, res) => {
    const {ID} = req.params;
    const { NAME, EMAIL, PASSWORD, ADDRESS } = req.body;
    // const HASH =  encryptPass.AES.encrypt(JSON.stringify(PASSWORD), 'key=123').toString();
    // const HASH = encryptPass.hashSync(PASSWORD, saltRounds);
    const HASH = encryptPass.hash(PASSWORD, saltRounds, (err, hash) => {
        return hash;
     });
    try{
        await User.updateUsers(ID, NAME, EMAIL, HASH, ADDRESS);
        return res.status(200).send({
            "message": "User updated successfully"
        });
    }catch(error){
        return res.status(200).send({
            "message": "User doesn't exists"
        });
    }
} 

const destroy = async (req, res) => {
    const {ID} = req.params;
    try{
        await User.deleteUsers(ID);
        return res.status(200).send({
            "message": "User deleted successfully"
        });
    }catch(error){
        return res.status(200).send({
            "message": "User doesn't exists"
        });
    }
} 


module.exports = {
    index,
    create,
    read,
    update,
    destroy
}