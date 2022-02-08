const knex = require('../knex.js')

const getUsers = async () => {
    const IT = await knex.select().table('IT');
    return IT;
}

const createUsers = async (POSITION, STATUS, USER) => {
    const IT = await knex.insert({
        POSITION,
        STATUS,
        USER
    }).into('IT')
    return IT;
}

const readUsers = async (ID) => {
    const IT = await knex.select().from('IT').where('IT.ID', ID);
    return IT;
}



module.exports ={
    getUsers,
    createUsers,
    readUsers
}