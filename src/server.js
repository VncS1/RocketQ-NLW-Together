const express = require('express')
const path = require('path')

const route = require('./routes')
const server = express()


//setando a view engine como ejs
server.set('view engine', 'ejs')

//Usar o conteúdo da pasta public
server.use(express.static("public"))

//mostrando onde está os arquivos ejs (onde ficam as telas)
server.set('views', path.join(__dirname, 'views'))

//Middleware para decodificar o conteúdo vindo do formulário e mandar para o controller
server.use(express.urlencoded({extended: true}));

//Usando o arquivo route
server.use(route)

//Ouvindo o servidor
server.listen(3000, () => {
    console.log("Rodando");
})

