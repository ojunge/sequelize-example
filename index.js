const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// ==> Rotas da API:
const userRoute = require('./routes/users.routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/users/', userRoute);

module.exports = app;

app.listen(2165);




