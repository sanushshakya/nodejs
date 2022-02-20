const {User} = require('../models');

const createUsers = async (req, res) => {
    const body = req.body;
    try{
        await User.create(body);
        return res.status(200).send('')
    }catch(e){
        res.status(500).send({ msg: "something went wrong", error });
    }
}

module.exports = {
    createUsers
}