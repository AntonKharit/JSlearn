const fakeProducts = [
    { id: 1, name: 'Яблоко', price: 50 },
    { id: 2, name: 'Хлеб', price: 30 },
    { id: 3, name: 'Молоко', price: 60 },
    { id: 4, name: 'Сыр', price: 120 }
];

//Функция для фильтрации продуктов < цены и сортировка по цене
function filterAndSortProducts(products, maxPrice) {
    const filtered = products.filter(product => product.price <= maxPrice);
  
    const sorted = filtered.sort((a, b) => a.price - b.price);
  
    return sorted;
  }

const filterProducts = filterAndSortProducts(fakeProducts, 80);

//Функция симуляции загруски с сервера продуктов
function fetchProducts(){
    return new Promise((resolve) => {
        console.log('Загружаем продукты...');
        setTimeout(() => {
            resolve(filterProducts);
        }, 2000)
    })
}

async function loadProducts() {
    try{
        const products = await fetchProducts();
        console.log('Продукты загружены:')
        products.forEach(product => {
            console.log(` ${product.name} ${product.price}`)
        });
    } catch (error){
        console.log('Произошла ошибка: ', error)
    }
}

loadProducts()