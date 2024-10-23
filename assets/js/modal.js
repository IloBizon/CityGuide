let modal = document.querySelector(".modal")
let wrap = document.querySelector(".modal__wrap")
let form = document.querySelector(".modal__form")
let submitButton = document.querySelector(".contacts__button")


console.log(form)
form.addEventListener("submit", event=>{
    event.preventDefault()
    toggleModal()
}  , true);
wrap.addEventListener("click", event=>{
    if (event.target === wrap) {
        toggleModal()
      }
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