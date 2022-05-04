import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')




//Pegar quando o marcar como lido foi clicado
//Pegar os botões com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

//Passando por cada botão
checkButtons.forEach((button) =>{
    //Add a escuta em cada objeto quando clicar
    button.addEventListener("click", handleClick) //Não passo nada pois está no padrão
})

//Pegar quando o excluir for clicado
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => handleClick(event, false));//Check false pois está no delete e precisa da arrows da
                                                                                    //arrow function pois precisa passar o event em algum lugar
})



//Função para abrir o modal
function handleClick(event, check = true) { //check = true é padrão

    event.preventDefault() //Não alterar a URL do site

    const text = check ? "Marcar como lida" : "Excluir" //if check == true, marcar como lido, else, excluir pergunta


    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` : `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    //Se clicou no marcar como lida, tirar a classe red (deixar o botão azul)
    //Se não colocar a classe red(deixar o botão vermelho)
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    modal.open()
}