document.addEventListener('DOMContentLoaded', function() {     //O código dentro deste listener é executado assim que o conteúdo do DOM é carregado           
    const products = [
    { id: 1, name: 'Treino para braço', category: ['m'], description: 'Simples e eficiente, ideal para iniciantes e experientes.', image:'../images/m1.png' },
    { id: 2, name: 'Hatha Yoga', category: ['y'], description: 'Dedicado a prática de posturas e exercícios de respiração.', image:'../images/y1.png' },
    { id: 3, name: 'Jazz', category: ['d'], description: 'Perfeito para pessoas de todas as idades', image:'../images/d1.png' },
    { id: 4, name: 'Pilates contemporâneo', category: ['p'], description: 'Treino adaptável de acordo com as necessidades de cada praticante.', image:'../images/p1.png' },
    { id: 5, name: 'Treino para braço', category: ['m'], description: 'Treino mais rígido que a primeira opção; é recomendado para pessoas mais experientes.', image: '../images/m2.png' },
    { id: 6, name: 'Dhyana Yoga', category: ['y'], description: 'Dedicado à meditação e contemplação.', image:'../images/y2.png' },
    { id: 7, name: 'Pilates funcional', category: ['p'], description: 'Focado no uso de equipamentos de fácil mobilidade ou apenas o próprio corpo.', image:'../images/p2.png' },
    { id: 8, name: 'Hip Hop', category: ['d'], description: 'Recomendado para adolescentes e jovens, que desejam se exercitar e se divertir ', image:'../images/d2.png' },
    { id: 9, name: 'Kriya Yoga', category: ['y'], description: 'Dedicado ao equilíbrio energético através da prática de mantras em meditação.', image:'../images/y3.png' },
    { id: 10, name: 'Treino para perna', category: ['m'], description: 'Ideal para quem não aguenta mais pular o temido leg day.', image:'../images/m3.png' },
    { id: 11, name: 'k', category: ['d'], description: 'k', image:'../images/d3.png' },
    { id: 12, name: 'Pilates Aéreo', category: ['p'], description: 'É realizado em suspensão invertida, permitindo uma alternância entre fortalecimento e relaxamento.', image:'../images/p3.png' },
    { id: 13, name: 'Power Pilates', category: ['p'], description: 'Especialmente recomendada para aqueles que desejam queimar calorias e se exercitar de forma mais intensa e enérgica.', image:'../images/p4.png' },
    { id: 14, name: 'Kundalini Yoga', category: ['y'], description: 'Dedicado a desobstrução do fluxo energético no corpo.', image:'../images/y4.png' },
    { id: 15, name: 'o', category: ['d'], description: 'o', image:'../images/d4.png' },
    { id: 16, name: 'Treino para costas ', category: ['m'], description: 'Diversas opções e maneiras de realizar este treino', image:'../images/m4.png' }
];
//product list define um array para pegar as informações  ID, nome, categoria, descrição e imagem
const productList = document.querySelector('.product-list'); //Seleciona o elemento que vai exibir a lista de produtos.
const categoryFilter = document.getElementById('category-filter');// Seleciona o filtro de categorias
const searchInput = document.getElementById('search-input'); //Seleciona o campo de busca

function displayProducts(products) { //recebe uma lista de produtos e atualiza o productList
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div'); //cria um novo elemento div, define as classes e insere a imagem, nome e descrição do produto (a cada produto)
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

function filterProducts(categories, search) { //Filtra a lista de produtos com base nas categorias selecionadas e no texto de busca
//Se categorias forem selecionadas, aplica um filtro que retorna apenas os produtos que pertencem a essas categorias
//Se houver um texto de busca, aplica um filtro adicional para encontrar o nome do produto  
    //Chama as funcões de categoria e busca pra paresentar o resultado 
    let filteredProducts = products;

    if (categories.length > 0 && !categories.includes('all')) {
        filteredProducts = filteredProducts.filter(product =>
            product.category.some(cat => categories.includes(cat))
        );
    }

    if (search) {
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    displayProducts(filteredProducts);
}

categoryFilter.addEventListener('change', function() {
    const selectedCategories = Array.from(this.selectedOptions).map(option => option.value);
    filterProducts(selectedCategories, searchInput.value);
});

searchInput.addEventListener('input', function() {
    const selectedCategories = Array.from(categoryFilter.selectedOptions).map(option => option.value);
    filterProducts(selectedCategories, this.value);
});

displayProducts(products);
    // é chamado para mostrar todos os produtos de novo quando carregar a página
});
