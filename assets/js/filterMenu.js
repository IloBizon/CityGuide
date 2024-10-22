const filterMenu = document.getElementById("filter_menu")

function initMenu() {
    let filter = filterMenu.querySelector(".products__filter")
    if (window.outerWidth <= 1000) {
        filterMenu.classList.add("products__menu")
        filterMenu.classList.add("hidden")
        filterMenu.classList.add("inactive")
        console.log(filter)
        filter.classList.remove("products__filter")
        filter.classList.add("products__filter_mob")
    
    }
    else {
        filterMenu.classList.remove("products__menu")
        filter = filterMenu.querySelector(".products__filter_mob")
        filter.classList.remove("products__filter_mob")
        filter.classList.add("products__filter")

    }
}

window.addEventListener('resize', function(event){
    initMenu()
  });

  initMenu()


function toggleMenu(){
    
    if (filterMenu.classList.contains("inactive")) {
        
        filterMenu.classList.remove("hidden");
        filterMenu.classList.remove("inactive");
        filterMenu.classList.add("active");
    }
    else {
        console.log(123)
        filterMenu.classList.remove("active");
        filterMenu.classList.add("inactive")
        sleep(500).then(() => {filterMenu.classList.add("hidden")});
    }



}
