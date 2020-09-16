require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const session = require('express-session');
const { isAuth } = require('./helpers/isAuthenticate');

//Cors
app.use(cors());

require('./config/auth')(passport);



//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    if(res.locals.user==undefined ){
        res.locals.user = req.user;
    }
    next();
});



//Routers
const userRouter = require('./routes/user');
const userUrl = require('./routes/url');

app.get('/', (req, res) => {
    console.log(req.host)
})

//Routes
app.use('/usuario', userRouter);
app.use('/url', userUrl);

app.listen(8081, () => {
    console.log('Servidor iniciado');
})
