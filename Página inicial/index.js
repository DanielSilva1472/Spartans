document.addEventListener('DOMContentLoaded', function() {
    //O código dentro deste listener é executado assim que o conteúdo do DOM é carregado
    
//Carrossel
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
    //Controla qual slide está visível.
let currentIndex = 0;
//Mostra qual slide corresponde ao índice fornecido.
function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else { 
        currentIndex = index;
    }
    //Faz o carrossel rolar ajustando a propriedade "transform" do estilo, utilizando translateX
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    /chama show slide para mostrar o próximo slide
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);
    /chama o próximo slide após 3 segundos
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
    setTimeout (temporizador*5*60); {
        alert("Confira nossos planos de aula");
    };
}
temporizador();
