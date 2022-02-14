const express = require('express');
const app = express();
const routes = require('./routes/main.routes')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars').engine;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//view engine setup
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static("public"));

//routes
app.use(routes);



app.listen(8080, () => {
    console.log("Listening to port 8080.")
})