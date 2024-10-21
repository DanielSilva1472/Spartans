document.addEventListener('DOMContentLoaded', function() {
    // Carrossel
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

    // Popup
    window.onload = () => {
        document.getElementById('popup').style.display = 'block';
    };

    document.querySelector("#closebtn").addEventListener("click", () => {
        document.getElementById('popup').style.display = 'none';
    });
});

// Função para exibir uma mensagem após 3 segundos
function temporizador() {
    setTimeout(() => {
        alert("Confira nossos planos de aula");
    }, 3000); // Altere para 3000 milissegundos
}
temporizador();

// API de geolocalização
const script = document.createElement('script');
script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
document.head.appendChild(script);
script.onload = () => {
    var map = L.map('map').setView([-24.005586559371565, -46.44287364332788], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
// marcador
    function addMark(coordenadas, textoPopup) {
        L.marker(coordenadas).addTo(map)
            .bindPopup(textoPopup)
            .openPopup();
    }

    addMark([-24.005586559371565, -46.44287364332788], 'Academia Spartans');
};

// Função para definir o cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
}

// Função para obter o cookie
function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Verifica o armazenamento local (LocalStorage) e também usa cookies
function checkUser() {
    let user = getCookie("username");
    if (user) {
        alert("Bem-vinda de volta, " + user + "!");
    } else {
        user = prompt("Por favor, insira seu nome:");
        if (user && user.trim() !== "") {
            setCookie("username", user, 7); // Armazena o cookie por 7 dias
            alert("Bem-vinda, " + user + "!");
        }
    }
}

// Limpa o cookie
function clearUser() {
    setCookie("username", "", -1); // Define um cookie com uma data de expiração passada
}

// Chama a função de verificação de usuário
checkUser();
