//arquivo para criar o bd

const sqlite3 = require('sqlite3')
const { open } = require('sqlite')


module.exports = () =>
    //Abrindo a conexão com o banco de dados
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database, //Comanda o arquivo, caso mudar o tipo de banco só trocar isso
    })
