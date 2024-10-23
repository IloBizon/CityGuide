let observer = new IntersectionObserver((entries,observer)=>{

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active")
            observer.unobserve(entry.target)
        }
    })

},{
    rootMargin: "-200px"
})


function scrollTrigger(selector) {
    let elems = document.querySelectorAll(selector)
    console.log(123)
    elems = Array.from(elems)
    elems.forEach(el => {

        if(window.outerWidth > 500) {
            addObserver(el)
        }
        else {

            el.classList.add("active")
        }

    })

}

function addObserver(el) {
    observer.observe(el)
}

scrollTrigger('.scroll-reveal')