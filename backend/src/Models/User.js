const db = require('../config/connection');

const User = db.sequelize.define('Usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});





module.exports = User;
