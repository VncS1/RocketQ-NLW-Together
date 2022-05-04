const express = require('express');

const route = express.Router();


//Rota barra(raíz) vai renderizar o index.ejs
route.get('/', (req, res) => {
    res.render("index")
});

route.get('/room', (req, res) => {
    res.render("room")
})

route.get('/create-pass', (req, res) => {
    res.render("create-pass")
})


//Exportando o route
module.exports = route