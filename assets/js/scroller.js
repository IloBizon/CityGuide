let slider = document.getElementById("hotels_scroller")
let rightBtn = document.getElementById("hotels_right")

let scrollCounts = localStorage.getItem("countSlider")
let maxSlides = 2
let sliderDivider = 3

if(window.innerWidth <= 1000 ) {
    if (window.innerWidth <= 768) {
        maxSlides = 4
        sliderDivider = 1
        console.log(maxSlides)
    }
    else {
        maxSlides = 3
        sliderDivider = 2
    }
    
}



function slideCards(slideDirection) {

    if (localStorage.getItem("countSlider") == maxSlides && slideDirection == 1) {
        slider.scroll({ top: 0, left: 0, 
            behavior: "smooth"} 
        )
        scrollCounts = localStorage.setItem("countSlider", Number(0))
        return 
    }
    else if (localStorage.getItem("countSlider") == 0 && slideDirection == -1) {
        slider.scroll({ top: 0, left: slider.scrollWidth, 
            behavior: "smooth"} 
        )
        scrollCounts = localStorage.setItem("countSlider", Number(maxSlides))
        return 
    }

    if (slideDirection == 1 && localStorage.getItem("countSlider") != maxSlides) {
        scrollCounts = localStorage.setItem("countSlider", Number(localStorage.getItem("countSlider")) + 1)
    }
    else if(slideDirection == -1 && localStorage.getItem("countSlider") != 0){
        scrollCounts = localStorage.setItem("countSlider", Number(localStorage.getItem("countSlider")) - 1)
    }

    scrollAmount = localStorage.getItem("countSlider") * (slider.scrollWidth / 5)
    slider.scroll({ top: 0, left: scrollAmount, 
        behavior: "smooth"} 
    )
}
slideCards(localStorage.getItem("countSlider"))


