const express = require ('express');
const controller = require ('./controller.js');
const notFoundMiddleware = require ('./middleware/not-found.js');
const errorMiddleware = require ('./middleware/error.js');

const app = express();

app.use(express.json());

app.use('/api/animalkingdom', controller);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
