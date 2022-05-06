module.exports = {
    index(req, res){

        //Pegando as informações vindas da modal
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action

        //Pegando a senha diretamente do formulário
        const password = req.body.password

        console.log(`${roomId} ${questionId} ${action} ${password}`)
    }
}