let modal = document.querySelector(".modal")
form = document.querySelector(".modal__form")
let submitButton = document.querySelector(".contacts__button")


console.log(form)
form.addEventListener("submit", event=>{
    console.log(form)
    event.preventDefault()
    toggleModal()
}  , true);
modal.addEventListener("click", event=>{
    toggleModal()
}  , true);


function toggleModal(e) {

    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden")
        modal.classList.remove("inactive")
        modal.classList.add("active")
    }
    else {
        
        modal.classList.remove("active")
        modal.classList.add("inactive")
        sleep(500).then(() => {modal.classList.add("hidden")});
    }
}