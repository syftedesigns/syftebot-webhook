// Seteamos el framework
const express = require('express');
const bodyParser = require('body-parser');
require('colors');
const app = express();
const port = process.env.PORT || 1337; // Puerto de conexión del hook

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
app.use(bodyParser.json());
// Seteamos la URL donde estará el webhook del bot
app.use(require('../routes/routes.index'));
// GET para setear el server
app.get('/', (req, res) => {
    res.send('Syftebot webhook server')
});
// Montamos la conexión
app.listen(port, () => {
    console.log('Application connected on port '.magenta + port);
});