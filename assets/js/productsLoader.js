const loader = document.getElementById("loader")
const cardsWrap = document.getElementById("cards")
import { filterIcons } from "../js/filters.js";
import { updatePagination } from "./pagination.js";

function removeChildren() {
    if (cardsWrap.hasChildNodes) {
        cardsWrap.replaceChildren()
    }
}


export async function loadProducts(searchQuery, filterQuery){
    
    loader.classList.remove("inactive")
    let url = new URL("https://6729b8c56d5fa4901b6e1298.mockapi.io/cityguide/places")
    if (filterQuery != "all") {
        url.searchParams.append("category", filterQuery)
    }
    if (searchQuery != "") {
        url.searchParams.append("name", searchQuery)
    }


    let response = await fetch(url).catch(error => {
            loader.innerHTML = "Ничего не найдено"
            console.log("error")
    });
    let data = await response.json()
    if (!response.ok) {
            data = []
    }

    if (data == []) {
        
    }
    
    removeChildren()
    
    data.forEach(element => {
        const li = document.createElement("li")
        li.className = "products__card"
        li.style.background = `url(${element.image}) no-repeat center / cover`

        const div = document.createElement("div")
        div.className = "products__card-block"

        li.appendChild(div)


        const category = document.createElement("h3")
        category.className = "products__card-category"
        category.innerHTML = element.category

        const title = document.createElement("h2")
        title.className = "products__card-title"
        title.innerHTML = element.name

        const text = document.createElement("p")
        text.className = "products__card-text"
        text.innerHTML = element.description

        const address = document.createElement("p")
        address.className = "products__card-address"
        address.innerHTML = element.address

        div.append(...[category,title,text,address])

        cardsWrap.appendChild(li)


    });
    loader.classList.add("inactive")
}

cardsWrap.onload = function () {
    loader.classList.add("inactive")
}

window.onload = function () {
    loader.classList.add("inactive")
}







