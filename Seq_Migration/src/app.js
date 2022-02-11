const express = require('express');
const app = express();
const routes = require('./routes/main.routes')
const exphbs = require('express-handlebars').engine;
const path = require('path');

app.use(express.json());

//view engine setup
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//routes
app.use(routes);




app.listen(8080, () => {
    console.log("Listening to port 8080.")
})