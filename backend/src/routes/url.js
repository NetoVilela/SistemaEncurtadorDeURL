const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const shortUrl = require('node-url-shortener');
const db = require("../config/connection");


/* Model URL */
const URL = require('../models/URL');

router.get('/', (req, res) => {
    db.sequelize.query("select * from URLs;").then(urls=>{
        res.send(urls);
    });
});

router.post('/shorten', (req, res) => {

    shortUrl.short(req.body.url, (err, url) => {
        URL.create({
            original_url: req.body.url,
            new_url: url,
            id_usuario_url:  1
        }).then(()=>{
            res.send("URL encurtada com sucesso: " + url);
        }).catch(error=>{
            res.send("Erro ao encurtar a URL.");
        });
    });


});



module.exports = router;