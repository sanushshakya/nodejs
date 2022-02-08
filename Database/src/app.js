const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

app.use(routes);

app.get('/print', (req, res) => {
    return res.status(200).send({
        "message": "Hello World."
    })
});


app.listen(8000, () => {
    console.log('Listening at port 8000')
});


