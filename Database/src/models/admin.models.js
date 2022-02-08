const knex = require('../knex.js')

const getUsers = async () => {
    const admin = await knex.select().table('ADMIN');
    return admin;
}

const createUsers = async (POSITION, ASSIGNED, USER) => {
    const admin = await knex.insert({
        POSITION,
        ASSIGNED,
        USER
    }).into('ADMIN')
    return admin;
}

const readUsers = async (ID) => {
    const admin = await knex.select().from('ADMIN').where('ADMIN.ID', ID);
    return admin;
}



module.exports ={
    getUsers,
    createUsers,
    readUsers
}