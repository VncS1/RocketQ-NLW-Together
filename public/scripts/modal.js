export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');
    
    const open = () => {
        //atribuir a classe active
        modalWrapper.classList.add("active")
    }

    const close = () => {
        //remover a classe active
        modalWrapper.classList.remove("active")
    }

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close);


    return {
        open,
        close
    }
}

