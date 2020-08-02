const express = require('express');
const path = require('path');
const router = require('./routes/users');
const cardsRouter = require('./routes/cards');
const notFound = require('./routes/notFound');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.use('/', cardsRouter);
app.use(notFound);

app.listen(PORT, () => {

});
