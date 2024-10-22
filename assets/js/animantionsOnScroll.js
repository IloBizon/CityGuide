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

    elems = Array.from(elems)
    elems.forEach(el => {
        addObserver(el)

    })

}

function addObserver(el) {
    observer.observe(el)
}

scrollTrigger('.scroll-reveal')