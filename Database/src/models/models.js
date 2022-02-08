const knex = require('../knex.js')

const getUsers = async () => {
    const user = await knex.select().table('user');
    return user;
}

const createUsers = async (NAME, EMAIL, PASSWORD, ADDRESS ) => {
    const user = await knex.insert({
        NAME,
        EMAIL,
        PASSWORD,
        ADDRESS
    }).into('user')
    return user;
}

// const readUsers = async (ID) => {
//     const user = await knex.select().from('user').where('user.ID', ID);
//     return user;
// }

const readUsers = async (EMAIL) => {
    const user = await knex.from('user').innerJoin('ADMIN', 'user.EMAIL', 'ADMIN.USER' )
    return user;
}

const updateUsers = async (ID, NAME, EMAIL, PASSWORD, ADDRESS) => {
    const user = await knex('user').where({ID: ID}).update({
        NAME,
        EMAIL,
        PASSWORD,
        ADDRESS
    })
    return user;
}

const deleteUsers = async (ID) => {
    const user = await knex('user').where({ID: ID}).delete();
    return user;
}


module.exports={
    getUsers,
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers
};