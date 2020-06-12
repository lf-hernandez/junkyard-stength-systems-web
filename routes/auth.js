const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('login');
});

router.get('/signup', (req, res, next) => {
    res.send('signup');
})

module.exports = router;