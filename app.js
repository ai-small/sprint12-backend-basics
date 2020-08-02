const express = require('express');
const path = require('path');
const router = require('./routes/users');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(PORT, () => {

});
