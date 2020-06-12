const express = require('express');
const router = express.Router();

router.get('/clients', (req, res, next) => {
    res.send('clients list');
});

router.get('clients/:id', (req, res, next) => {
    res.send('client by id');
});

router.get('clients/:id/edit', (req, res, next) => {
    res.send('edit client by id');
})

module.exports = router;