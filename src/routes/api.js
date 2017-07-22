'use strict';
const router = require('express').Router();
const controller = require('../controllers/api');

router.get('/', (req, res) => {
    res.status(200).send('GET');
});

router.post('/', (req, res) => {
    const body = req.body;
    controller.createCat(body)
    .then( (status) => {
        if(status.status === 'ok') {
            console.log('entro');
            res.status(201).send('created cat');
        }else {
            //res.status(200).send('POST!');
        }
    });
});

router.put('/', (req, res) => {
    res.status(200).send('PUT');
});

router.delete('/', (req, res) => {
    res.status(200).send('DELETE');
});

module.exports = router;