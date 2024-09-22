document.addEventListener('DOMContentLoaded', function() {
    
//Carrossel
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else { 
        currentIndex = index;
    }
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);

//Popup
window.onload = () => { // isso faz o popup carregar dps da pág
    document.getElementById('popup').style.display  = 'block';
};

document.querySelector("#closebtn").addEventListener("click", () => {
    document.getElementById('popup').style.display = 'none';
});
});
// Função para exibir uma mensagem após 3 segundos
function temporizador() {
    setInterval (temporizador*5*60); {
        alert("Confira nossos planos de aula");
    };
}
temporizador();
