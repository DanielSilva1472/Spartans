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

//Temporizador 
//const setTimeout = document.querySelector('.');
            //function startIdleTimer() {
                //let timeout;
                //function resetTimer() {
                    //clearTimeout(timeout);
                    //timeout = setTimeout(() => alert('Você não está ativo a 4 minutos'), 4 * 1 * 1000);
                //}

                //document.addEventListener('mousemove', resetTimer);
                //document.addEventListener('keypress', resetTimer);
                //resetTimer();
            //}
//});

window.onload = () => {
    document.getElementById('popup').style.display  = 'block';
};

document.querySelector("#closebtn").addEventListener("click", () => {
    document.getElementById('popup').style.display = 'none';
});
//coki
// Função para criar o cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*5*1*60));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Função para ler o cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Função para verificar se o cookie já existe
function checkCookie() {
    const cookieConsent = getCookie("cookieConsent");
    if (cookieConsent !== "") {
        // Se o cookie já existe, esconde a mensagem de cookies
        document.getElementById("cookies-msg").style.display = "none";
    }
}

// Adiciona evento ao botão "aceito"
document.getElementById("aceito").addEventListener("click", function() {
    // Quando o botão é clicado, define o cookie por 30 dias
    setCookie("cookieConsent", "true", 30);
    // Esconde a mensagem de cookies
    document.getElementById("cookies-msg").style.display = "none";
});

// Verifica o cookie quando a página é carregada
window.onload = checkCookie;
});