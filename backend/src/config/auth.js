const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require("../config/connection");


/* Model User */
const User = require('../models/User');


module.exports = function (passport) {

    passport.use(new localStrategy({ usernameField: 'email', passwordField: 'senha' }, (email, senha, done) => {

        db.sequelize.query(`select * from Usuarios where email = '${email}';`).then(user => {
            if (!user) {

                return done(null, false, { message: "Essa conta não existe" });
                
            }

            let usuario = user[0][0];
            console.log(usuario);
            bcrypt.compare(senha, user[0][0].senha, (erro, batem)=>{
                if(batem){
                    console.log(user[0][0])
                    return done(null, user[0][0]);
                }else{

                    return done(null, false, {message: "Senha incorreta"});
                }
            });
        }).catch(err=>{
            return done(null, false, { message: "Essa conta não existe" });
        })
    }));

    passport.serializeUser((usuario, done)=>{
        console.log(usuario.id)
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done)=>{
        console.log("DESerialize aqui: "+id)
        db.sequelize.query(`select * from Usuarios where id = '${id}';`).then((rows)=>{
            console.log("to aqui: "+rows[0][0])
            done(null, rows[0][0]);
        }).catch(error=>{
            done(error, null);
        })
    });

}