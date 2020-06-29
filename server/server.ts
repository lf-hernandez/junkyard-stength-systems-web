import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'API test'
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});