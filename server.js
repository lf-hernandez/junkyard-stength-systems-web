const path = require('path');
const express = require('express');


const index = require('./routes/index');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))