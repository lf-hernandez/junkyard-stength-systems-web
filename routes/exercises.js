const express = require('express');
const router = express.Router();

router.get('/exercises', (req, res, next) => {
    res.send('exercises');
});

router.get('exercises/muscle/:muscle-name', (req, res, next) => {
    res.send('exercises by muscle name');
});

router.get('exercises/:exercise-name', (req, res, next) => {
    res.send('exercise by name');
});

router.get('exercises/:exercise-name/edit', (req, res, next) => {
    res.send('edit exercise by name');
});

router.get('exercises/add', (req, res, next) => {
    res.send('add new exercise');
})

module.exports = router;