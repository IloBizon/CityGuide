let pag_cards = document.querySelectorAll('.products__card');
const maxCards = 2
const prevButton = document.getElementById('pagination_prev'); 
const nextButton = document.getElementById('pagination_next');
const pagination = document.getElementById("pagination")
const pageLinks = document.getElementById('pag_links');
let links = []

let totalPages = Math.ceil(pag_cards.length / maxCards); 
let currentPage = 1; 


export function displayPage(page) {
    currentPage = page 
    updatePagination()
    const startIndex = (page - 1) * maxCards; 
    const endIndex = startIndex + maxCards;
    
    let cardNum = 0
    pag_cards.forEach((card, index) => { 
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'flex';
            cardNum += 1
            let delay = cardNum * 0.2
            card.style.animationDelay = delay + "s"
        } else { 
            card.style.display = 'none'; 
        } 
    }); 
} 

export function generatePagination(){
    pag_cards = document.querySelectorAll('.products__card');
    totalPages = Math.ceil(pag_cards.length / maxCards);
    console.log(totalPages)
    for (let index = 0; index < totalPages; index++) {
        let a = document.createElement("a")
        a.href = "#"
        a.className = "pagination__page"
        a.setAttribute("data-page", index + 1)
        a.innerHTML = index + 1
        pageLinks.appendChild(a)

        a.addEventListener('click', (e) => { 
            e.preventDefault(); 
            const page = parseInt(a.getAttribute('data-page')); 
            if (page !== currentPage) { 
                currentPage = page; 
                displayPage(currentPage); 
                updatePagination(); 
            } 
        }); 
        links.push(a)
    }
}

export function updatePagination() {
    pag_cards = document.querySelectorAll('.products__card');
    
    totalPages = Math.ceil(pag_cards.length / maxCards);
    prevButton.disabled = currentPage === 1; 
    nextButton.disabled = currentPage === totalPages; 




    links.forEach((link) => {
        const page = parseInt(link.getAttribute('data-page')); 
        link.classList.toggle('active', page === currentPage);
        
        if (page <= totalPages){
            link.style.display = "unset"
        }
        else {
            link.style.display = "none"
        }
        

    });
    if (totalPages == 0) {
        pagination.style.display = "none"
    }
    else {
        pagination.style.display = "flex"
    }
}    


prevButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (currentPage > 1) { 
        currentPage--; 
        displayPage(currentPage); 
        updatePagination(); 
    } 
}); 


nextButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (currentPage < totalPages) { 
        currentPage++; 
        displayPage(currentPage); 
        updatePagination(); 
    } 
}); 




