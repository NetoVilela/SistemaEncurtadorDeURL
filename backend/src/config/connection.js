require('dotenv').config();
require('dotenv/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost", //Adicionar ao .env
    dialect: "mysql"
}); //Connection with DB

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/* ============Verificando conexão============= */
// sequelize.authenticate().then(()=>{
//     console.log("Connected with success to db");
//     console.log(process.env.DB_NAME);
// }).catch(error=>{
//     console.log("Falha ao se conectar com o banco de dados: "+error);
//     console.log(process.env.DB_NAME);
// })