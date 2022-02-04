const User = require('../models/user.model');
const encryptPass = require('crypto-js');
const fs = require('fs');
const path = require('path');

const FILE_PATH = './models/data.json';

const readFile = (path) => {
  return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8'}));
}

const writeFile = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data), {encoding: "utf-8"});
}

const getData = () => {
  try{
    return readFile(FILE_PATH);
  }catch(error) {
    if (error.code === 'ENOENT') {
      writeFile(FILE_PATH, []);
    }
  }
}

const index = async (req, res) => {
  return res.status(200).send(getData());
}

const read = async (req, res) => {
  const {id} = req.params;
  const db = await getData();
  const user = db.find((user) => user.id == id);
  if(user){
    return res.status(200).send(db);
  }
  else {
    return res.status(200).send({
      "message": "No user found."
    });
  }
}

const create = async (req, res) => {
  const { id, name, email, password, address } = req.body;
  const db = await getData();
  const user = db.find((user) => user.email === email);
  if(!user){
    const hash = encryptPass.AES.encrypt(JSON.stringify(password), 'key=123').toString();
    db.push({id, name, email, hash, address})
    writeFile(FILE_PATH, db);
    return res.status(200).send({
      "message": "User Created."
    });
  }
  else {
    return res.status(200).send({
      "message": "User Exists."
    });
  }
}

const edit = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, address } = req.body;
  const db = await getData();
  const user = db.find((user) => user.id == id);
  const hash = encryptPass.AES.encrypt(JSON.stringify(password), 'key=123').toString();
  if (user) {
    user.id = id
    user.name = name
    user.email = email
    user.password = hash
    user.address = address
    const index = db.findIndex((user) => user.id == id);
    db.splice(index, 1);
    db.push(user);
    writeFile(FILE_PATH, db);
    return res.status(200).send(user);
  } else {
    return res.status(404).send({
      error: `No user found with id=${id}`
    });
  }
}

const destroy = async (req, res) => {
  const { id } = req.params;
  const db = await getData();
  const user = db.find((user) => user.id == id);
  if (!user) {
    return res.status(404).send({
      error: `No user found with id=${id}`
    });
  } else {
    const dd = db.filter((user) => user.id != id);
    writeFile(FILE_PATH, dd);
    return res.status(200).send({ message: "User delete successfully" });
  }
}

module.exports = {
  index, read, create, edit, destroy
}