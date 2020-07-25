const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const mongo = require('./config/mongo');

mongoose.connect(mongo.DB,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição ( criação , edição )

app.use(express.json());
app.use(routes);

app.listen(3333);
