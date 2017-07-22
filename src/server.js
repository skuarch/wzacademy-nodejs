'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/', routes);
/*app.get('/', (req, res) => {
    res.sendStatus(200).send('hello mocos');
});*/

app.listen(3000, () => {
    console.log("working on 3000");
});