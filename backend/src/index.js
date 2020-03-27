const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //vir antes das rotas
app.use(routes); //essa linha tem que vir abaixo do use(express.json)

app.listen(3333);