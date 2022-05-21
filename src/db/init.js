//Apenas para criar  o banco de dados

const Database = require('./config');

const initDb = {
    //Async - Para rodar o await a função precisa ser async
    //Await - Ele espera acabar uma execução para começar a outra
    //No caso esperar executar o Database() para executar o db.exec() 
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`) //Criando a tabela dos rooms

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT, 
            read INT,
            room INT
        )`)

        //encerrando o bd
        await db.close()
    }
}


initDb.init()

