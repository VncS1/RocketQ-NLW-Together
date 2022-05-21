const Database = require("../db/config")

module.exports = {
    //Criando um room
    async create(req, res){
        
        const db = await Database()
        const pass = req.body.password //Pegando a senha direto do form
        let roomId
        let isRoom = true

        //Loop para verificar se não tem nenhuma sala que possua o mesmo numero que foi
        //gerado no momento, se já tiver um igual, ele irá entrar no while dnv e gerar outro numero
        while(isRoom){
            for(var i = 0; i < 6; i++){

                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                //Gerando 6 numeros aleatorios de 1 a 9 e juntando na variavel roomId e convertendo para string para concatenar ao invés de somar.
                roomId += Math.floor(Math.random() * 10).toString()
            }

            //Procurando tudo no bd e verificando se o numero ja existencia
            const roomExistIds = await db.all(`SELECT id FROM rooms`)

            //Verificando se dentro do array existe a condição q está dentro do ()
            isRoom = roomExistIds.some(roomExistId => roomExistId === roomId)

            if(!isRoom){
                //Adicionando ao banco as informações
                //ParseInt está convertendo a string de volta em um número

                await db.run(`
                    INSERT INTO rooms(id,pass) VALUES ( ${parseInt(roomId)}, '${pass}' )
                `)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req,res) {
        const db = await Database()
        const roomId = req.params.room
        //Todas as questões com read = 0
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`)
        //Todas as questões com read = 1
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`)

        let isNoQuestions

        if(questions.length == 0 && questionsRead.length == 0){
            isNoQuestions = true
        }

        //Passando as informações para o arquivo EJS
        res.render("room", {roomId: roomId, questions:questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
    },
    
    async enter(req,res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}