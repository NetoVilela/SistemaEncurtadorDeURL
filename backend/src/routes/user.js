require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require("../config/connection");
const passport = require("passport");


/* Model User */
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send("Início usuário");
});

//Route login
router.post('/login', (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: process.env.BASE_URL_FRONT+'/logado',
        failureRedirect: process.env.BASE_URL_FRONT+'/deslogado'

    })(req, res, next);
})


// Route register user
router.post('/', (req, res) => {
    db.sequelize.query(`select * from Usuarios where email = '${req.body.email}';`).then((users) => {
        if (users[0][0] != undefined || users[0][0] != null) {    //checks if the user already exists
            res.send('Esse email já está sendo usado.')
        } else {
            if (req.body.senha === req.body.senha2) { //checks that passwords are the same

                //encrypting password
                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(req.body.senha, salt, (erro, hash) => {
                        if (erro) {
                            res.send("Houve um erro ao salvar o usuário");
                        } else {

                            User.create({
                                nome: req.body.nome,
                                email: req.body.email,
                                senha: hash
                            }).then(() => {
                                res.redirect(process.env.BASE_URL_FRONT+'/login');
                            }).catch(error => {
                                res.send("Erro ao cadastrar o usuário: " + error);
                            });

                        }
                    })
                })
            } else {
                res.send("As senhas não batem.")
            }
        }
    })
});

router.get('/sair', (req, res) => {
    req.logOut();
    res.redirect(process.env.BASE_URL_FRONT+'/deslogado');
});

module.exports = router;