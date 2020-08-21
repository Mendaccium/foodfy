const modalOverlay = document.querySelector('.modal-overlay');
const modalcontent = document.querySelector('.modal-content');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    card.addEventListener("click", function(){
        const img_id = card.getAttribute("id");
        const autor = card.querySelector("#autor").textContent;
        const prato = card.querySelector("#prato").textContent;
        console.log(autor);
        console.log(prato);

        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `/layouts/assets/${img_id}`;
        document.querySelector(".modal-content #prato").innerHTML = prato;
        document.querySelector(".modal-content #autor").innerHTML = autor;
    });
}
const closeModal = document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("img").src = "";
    const autor = modalOverlay.querySelector("#autor");
    const prato = modalOverlay.querySelector("#prato");

    
})


