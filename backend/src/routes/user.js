const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require("../config/connection");
const passport = require("passport");
const { isAuth } = require('../helpers/isAuthenticate');

/* Model User */
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send("Início usuário");
});

//Route login
router.post('/login', (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: '/sucesso',
        failureRedirect: '/falhou'
        
    })(req, res, next);
    
})


// Route Shorten URL
router.post('/',  (req, res) => {
    db.sequelize.query(`select * from Usuarios where email = '${req.body.email}';`).then((users) => {
        if (users[0][0] != undefined || users[0][0] != null) {    //checks if the user already exists
            res.send('Esse email já está sendo usado.')
        } else {  //if it doesn't exist
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
                                res.send("Usuário cadastrado com sucesso!");
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


module.exports = router;