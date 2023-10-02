const itemsSidebar = [
    'MUJER | HOMBRE',
    'Novedades',
    'Ropa',
    'P&B by Rosalía',
    'Zapatos',
    'Accesorios',
    'Editorials',
    'Join Life',
    'Promociones',
];

const products = [
    {
        name: 'Camiseta 1',
        cost: 12.99,
        imagePath: 'assets/foto1.png'
    },
    {
        name: 'Camiseta 2',
        cost: 12.99,
        imagePath: 'assets/foto2.png'
    },
    {
        name: 'Camiseta 3',
        cost: 12.99,
        imagePath: 'assets/foto3.png'
    },
    {
        name: 'Camiseta 4',
        cost: 12.99,
        imagePath: 'assets/foto4.png'
    },
    {
        name: 'Camiseta 5',
        cost: 12.99,
        imagePath: 'assets/foto5.png'
    },
    {
        name: 'Camiseta 6',
        cost: 12.99,
        imagePath: 'assets/foto6.png'
    },
    {
        name: 'Camiseta 7',
        cost: 12.99,
        imagePath: 'assets/foto7.png'
    },
    {
        name: 'Camiseta 8',
        cost: 12.99,
        imagePath: 'assets/foto8.png'
    },
    {
        name: 'Camiseta 9',
        cost: 12.99,
        imagePath: 'assets/foto9.png'
    },
    {
        name: 'Camiseta 10',
        cost: 12.99,
        imagePath: 'assets/foto10.png'
    },
]

itemsSidebar.forEach(item => {
    document.getElementById('sidebarList').innerHTML += `<li><a href="${item.toLowerCase()}.html">${item}</a></li>`
})

products.forEach(product => {
    document.getElementById('products').innerHTML +=  `<li class="card">
                                                            <img src="${product.imagePath}" alt="${product.name}">
                                                            <h4>${product.name}</h4>
                                                            <span class="amount">${product.cost} €</span>
                                                        </li>`
})

