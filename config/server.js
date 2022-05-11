const express = require('express')
const consign = require('consign')
const app = express()

const { Liquid } = require('liquidjs');

const engine = new Liquid({
  extname: '.liquid',
});

app.engine('liquid', engine.express());
app.set('views', './app/views')

app.use(express.static('./app/public'));

consign()
    .include('app/routes')
    // .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;