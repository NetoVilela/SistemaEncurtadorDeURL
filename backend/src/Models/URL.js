const db = require('../config/connection');

const URL = db.sequelize.define('URLS', {
    original_url: {
        type: db.Sequelize.STRING
    },
    new_url: {
        type: db.Sequelize.STRING
    },
    id_usuario_url: {
        type: db.Sequelize.INTEGER,
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    }
});

module.exports = URL;