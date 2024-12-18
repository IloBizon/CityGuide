let header = document.getElementById("header_fixed")
let menu = document.getElementById("menu");
const menuItems = document.querySelectorAll(".menu__button");
let headerShown = false
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

window.addEventListener("scroll", function() { 
    if(window.scrollY > window.innerHeight) {
       showHeader()
    }
    else {
       hideHeader()
    }
 });

 
menuItems.forEach( 

    function(menuItem) { 
        
      menuItem.addEventListener("click", (e) =>{
        toggleMobMenu()
      });
  
    }
  
  )

function showHeader() {
  if (!headerShown) {
    header.classList.remove("hidden");
    header.classList.remove("inactive");
    header.classList.add("active");
    headerShown = true
  }

}
function hideHeader() {
    if (headerShown) {
      header.classList.remove("active");
      header.classList.add("inactive")
      headerShown = false
      sleep(500).then(() => {header.classList.add("hidden")});
    }
    
}


function toggleMobMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
        menu.classList.add("inactive")
        sleep(500).then(() => {menu.classList.add("hidden")});
    }
    else {
        menu.classList.remove("hidden")
        menu.classList.remove("inactive")
        menu.classList.add("active")
    }
}

