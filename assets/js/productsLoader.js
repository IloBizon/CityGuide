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


    let resp = fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText)
      })
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.log(error)
    });
    
    let data = await resp
    if (data == undefined) {
        data = []
    }
    
    removeChildren()

    
    data.forEach(element => {
        const li = document.createElement("li")
        li.className = "products__card"
        li.style.background = `url(${element.image}) no-repeat center / cover`
        li.style.opacity = 0
        li.style.animation = "jump_down 0.7s ease-in-out forwards"
        li.addEventListener("click", ()=>{

            
            console.log(window.location.origin)

           if (window.location.href.includes("CityGuide")) {
            let url = new URL(window.location.origin + "/CityGuide/place.html")
           }
           else {
            let url = new URL(window.location.origin + "/place.html")
           }
            url.searchParams.set("place",element.name)
            console.log(url)
            window.location.href = url;
        })

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







