const express = require('express');
const app = express();
const routes=require('./routes/main.route')
app.use(express.json())


// {
//   "email":"",
//   "password":"",
//   "address":"",
// }

// CRUD application
// create read update delete
// post get put delete

// Initialize routes
app.use(routes);

app.listen(8080, () => {
  console.log('Listening at port 8080')
})