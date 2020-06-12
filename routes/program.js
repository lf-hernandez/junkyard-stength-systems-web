const express = require('express');
const router = express.Router();

router.get('/programs/:id', (req, res, next) => {
    res.send('program by id');
});

router.get('programs/create', (req, res, next) => {
    res.send('create program');
});

router.get('programs/:id/edit', (req, res, next) => {
    res.send('edit program by id');
})

module.exports = router;