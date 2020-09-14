require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Routers
const userRouter = require('./routes/user');

app.get('/', (req, res) => {
    res.send('Inicio')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.use('/usuario', userRouter);

app.listen(8081, () => {
    console.log('Servidor iniciado');
})