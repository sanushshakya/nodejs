const yargs = require('yargs');

const {addDetails, loadDetails, readDetails, deleteDetails, updateDetails } = require('./notes')

yargs.command({
   command: 'input',
   describe: 'User details.',
   handler: (argv) => {
       addDetails(argv.name, argv.email, argv.password, argv.address);
   },
   builder: {
       name: {
           describe: 'This is user name.'
       },
       email: {
           describe: 'This is user email.',
           demandOption: true,
           unique: true,
       },
       password: {
           describe: 'This is your password.'
       },
       address: {
           describe: 'This is your address',
       }
   }
});

yargs.command({
    command: 'list',
    describe: 'This will list user details.',
    handler: ((agrv) => {
        loadDetails();
    }),
});

yargs.command({
    command: 'read',
    describe: 'This will show user details.',
    handler: (argv) => {
        readDetails(argv.email);
    },
});

yargs.command({
    command: 'delete',
    describe: 'This will delete user details.',
    handler: (argv) => {
        deleteDetails(argv.email);
    },
});

yargs.command({
    command: 'update',
    describe: 'This will update user details.',
    handler: (argv) => {
        updateDetails(argv.name, argv.email, argv.password, argv.address);
    },
});


yargs.parse()
// console.log(yargs.parse());

if (process.argv[2] === 'input') 
   return console.log('adding notes.');


if (process.argv[2] === 'list') {
    console.log('showing notes.');
}

if (process.argv[2] === 'read') 
   return console.log('reading notes.');


if (process.argv[2] === 'update') {
    console.log('updating notes.');
}

if (process.argv[2] === 'delete') 
   return console.log('deleting notes.');
