const Database = require('../db/config')

module.exports = {

    async index(req, res){
        const db = await Database()

        //Pegando as informações vindas da modal
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action

        //Pegando a senha diretamente do formulário
        const password = req.body.password

        // Verificando se a senha esta correta (db.get traz apenas 1 dado)
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId} `)

        if(verifyRoom.pass == password){
            if(action == "delete"){

                //Apagando a questão com o id passado
                await db.run(`DELETE FROM questions WHERE id=${questionId}`)

            }else if(action == "check"){

                //Marcando o read como 1 na questão com o id que foi passado
                await db.run(`UPDATE questions SET read = 1 WHERE id=${questionId}`)

            }
            res.redirect(`/room/${roomId}`)
        }else {
            res.render('passIncorrect', {roomId: roomId})
        }

    },

    async create(req,res) {
        const title = req.body.question
        const roomId = req.params.room

        const db = await Database()

        //Adicionando a questão e iniciando o 'read' como 0
        await db.run(`INSERT INTO questions(title,room, read) VALUES('${title}', ${roomId}, 0)`)

        res.redirect(`/room/${roomId}`)
    }
}