import {updatePagination, displayPage} from "../js/pagination.js"


const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.products__card');
let selectedFilter = localStorage.getItem("filter_query");
let activatedRadioValue

initFilters()

searchInput.addEventListener("input", function () {
    const searchQuery = localStorage.setItem("search_query", String(searchInput.value));
    filterIcons();
});

document.querySelectorAll('input[type="radio"][name="category"]').forEach(radio => {
    radio.addEventListener('change', () => {
        localStorage.setItem("filter_query", String(radio.value))
        filterIcons()
    });
});




filterIcons()
displayPage(1)


function initFilters() {

    let params = new URLSearchParams(document.location.search);

    if (params.has("place")){
        let place = params.get("place")
        
        localStorage.setItem("search_query", place)
        localStorage.setItem("filter_query", "all");
        searchInput.value = place
        return
    }
    if (!localStorage.hasOwnProperty("search_query")) {
        localStorage.setItem("search_query", "")
       }
    if (!localStorage.hasOwnProperty("filter_query")) {
        localStorage.setItem("filter_query", "all")
       }
    

    searchInput.value = localStorage.getItem("search_query")
    activatedRadioValue = localStorage.getItem("filter_query")
    if (!activatedRadioValue) {
        activatedRadioValue = 0
    }   
    const radio = document.querySelector(`input[name="category"][value=${activatedRadioValue == 0 ? "all" : activatedRadioValue}]`).checked = true;
}


function filterIcons() {
    let number = 0
    cards.forEach(function (card) {
        
        const name = card.querySelector("h2").textContent.toLowerCase();
        const category = card.querySelector("h3").textContent.toLowerCase();

        const filter_query = localStorage.getItem("filter_query").toLowerCase()

        if (name.includes(localStorage.getItem("search_query").toLowerCase()) && category.includes(filter_query != "all" ? filter_query : "")) {

        
            card.classList.remove("hidden")
            card.classList.add("active")
            card.style.display = "flex";
            number++;
        } 
        else {
                card.style.display = "none";
                card.classList.remove("active")
                card.classList.add("hidden")
        }
    });
    if(number == 0){
        console.log("nothing found")
    }
    displayPage(1)
}

