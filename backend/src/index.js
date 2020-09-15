require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const session = require('express-session');
const { isAuth } = require('./helpers/isAuthenticate');

require('./config/auth')(passport);

//Session
app.use(session({
    secret: 'seurl',
    resave: true,
    saveUninitialized: true
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Middleware
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

//Cors
app.use(cors());

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routers
const userRouter = require('./routes/user');
const userUrl = require('./routes/url');

app.get('/', (req, res) => {
    res.send('Inicio')
})


//Routes
app.use('/usuario', userRouter);
app.use('/url', userUrl);



app.listen(8081, () => {
    console.log('Servidor iniciado');
})



// res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    // if(req.method==='OPTIONS'){
    //     res.header("Accesso-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    //     return res.status(200).json({})
    // }