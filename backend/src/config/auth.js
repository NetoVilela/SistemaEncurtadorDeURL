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
            bcrypt.compare(senha, user[0][0].senha, (erro, batem)=>{
                if(batem){
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
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done)=>{
        db.sequelize.query(`select * from Usuarios where id = '${id}';`).then((rows)=>{
            
            done(null, rows[0][0]);
        }).catch(error=>{
            done(error, null);
        })
        
    });

}