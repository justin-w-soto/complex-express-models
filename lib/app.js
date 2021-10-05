const express = require ('express');
const controller = require ('./animalsController.js');
const notFoundMiddleware = require ('./middleware/not-found.js');
const errorMiddleware = require ('./middleware/error.js');

const app = express();

app.use(express.json());

app.use('/api/animals', controller);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
