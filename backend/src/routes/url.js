const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const shortUrl = require('node-url-shortener');
const db = require("../config/connection");
const { isAuth } = require('../helpers/isAuthenticate');

/* Model URL */
const URL = require('../models/URL');

router.get('/:id', (req, res) => {
    db.sequelize.query(`select * from URLs where id_usuario_url=${req.params.id};`).then(urls => {
        res.status(200).send(urls);
    });
});

router.post('/list', isAuth, (req, res) => {

    res.redirect(process.env.BASE_URL_FRONT + '/user/list/' + res.locals.user.id);

});

router.post('/shorten', isAuth, (req, res) => {

    shortUrl.short(req.body.url, (err, url) => {
        URL.create({
            original_url: req.body.url,
            new_url: url,
            id_usuario_url: res.locals.user.id
        }).then(() => {
            res.redirect(process.env.BASE_URL_FRONT + '/user/list/' + res.locals.user.id);
        }).catch(error => {
            res.redirect(process.env.BASE_URL_FRONT + '/user/shorten');
        });
    });

});



module.exports = router;