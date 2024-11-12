const pageTitle = document.querySelector(".prod-banner__title")
const banner = document.querySelector(".prod-banner")
const infoTitle = document.querySelector(".place__title")
const infoText = document.querySelector(".place__text")
const facts = document.querySelectorAll(".place__grid-text")
const loader = document.getElementById("loader")
const images = document.querySelectorAll(".place__img")


async function loadPage() {
    
    loader.classList.remove("inactive")
    let url = new URL("https://6729b8c56d5fa4901b6e1298.mockapi.io/cityguide/full-place")
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("place")) {
        url.searchParams.append("name", urlParams.get("place"))
    }
    // else {
    //     window.location.href = "places.html";
    // }

    
    let resp = fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        }
         window.location.href = "places.html";
      })
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.log(error)
    });

    var data = await resp
    

    banner.style.background = ` linear-gradient(
          rgba(0, 0, 0, 0.5 ),
          rgba(0, 0, 0, 0.5)
        ), url(${data[0].images[0]}) no-repeat center / cover`
    pageTitle.innerHTML = data[0].name
    infoTitle.innerHTML = data[0].name
    infoText.innerHTML = data[0].description
    for (var i = 0; i < facts.length; i++) {
        fact = facts[i];
        fact.innerHTML = data[0].facts[i]
    }
    for (let index = 0; index < images.length; index++) {
        const image = images[index];
        image.src = data[0].images[index + 1]

        
    }
    
    loader.classList.add("inactive")
    
}
loadPage()



