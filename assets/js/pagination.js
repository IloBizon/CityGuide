let pag_cards = document.querySelectorAll('.products__card');
const maxCards = 2
const prevButton = document.getElementById('pagination_prev'); 
const nextButton = document.getElementById('pagination_next');
const pagination = document.getElementById("pagination")
const pageLinks = document.querySelectorAll('.pagination__page'); 

let totalPages = Math.ceil(pag_cards.length / maxCards); 
let currentPage = 1; 


export function displayPage(page) {
    updatePagination() 
    const startIndex = (page - 1) * maxCards; 
    const endIndex = startIndex + maxCards;
    
    pag_cards.forEach((card, index) => { 
        if (index >= startIndex && index < endIndex) {
            console.log("filter")
            card.style.display = 'flex'; 
        } else { 
            card.style.display = 'none'; 
        } 
    }); 
} 


export function updatePagination() {
    pag_cards = document.querySelectorAll('.products__card.active');
    
    totalPages = Math.ceil(pag_cards.length / maxCards);
    console.log(pag_cards)
    prevButton.disabled = currentPage === 1; 
    nextButton.disabled = currentPage === totalPages; 
    pageLinks.forEach((link) => {
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
        pagination.style.display = "block"
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


pageLinks.forEach((link) => { 
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const page = parseInt(link.getAttribute('data-page')); 
        if (page !== currentPage) { 
            currentPage = page; 
            displayPage(currentPage); 
            updatePagination(); 
        } 
    }); 
}); 



