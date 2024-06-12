document.addEventListener('DOMContentLoaded', function() {
    //'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const apiUrl =     'https://makeup-api.herokuapp.com/api/v1/products.json';
    const productsContainer = document.getElementById('products-container');
    const getProductsBtn = document.getElementById('get-products-btn');

    function fetchAndDisplayProducts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                productsContainer.innerHTML = '';
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');

                    const productImage = document.createElement('img'); //by using textconetent
                    productImage.src = product.image_link;
                    productImage.alt = product.name;

                    const productName = document.createElement('h2');
                    productName.textContent = product.name;

                    const productBrand = document.createElement('p');
                    productBrand.textContent = `Brand: ${product.brand}`;

                    const productPrice = document.createElement('p');
                    productPrice.textContent = `Price: ${product.price}`;

                    productCard.appendChild(productImage);
                    productCard.appendChild(productName);
                    productCard.appendChild(productBrand);
                    productCard.appendChild(productPrice);

                    productsContainer.appendChild(productCard);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    getProductsBtn.addEventListener('click', fetchAndDisplayProducts);
});
