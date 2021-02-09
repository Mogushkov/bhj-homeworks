let products = document.querySelectorAll('.product'),
    cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < products.length; i++) {
    quantityDec(i);
    quantityInc(i);
    addToCart(i);
};

function quantityInc(i) {
    products[i].querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        (products[i].querySelector('.product__quantity-value').innerText) = 
        parseInt(products[i].querySelector('.product__quantity-value').innerText) + 1;
    });
};

function quantityDec(i) {
    products[i].querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        let value = parseInt(products[i].querySelector('.product__quantity-value').innerText);
        if (value > 1) {
            products[i].querySelector('.product__quantity-value').innerText = 
            parseInt(products[i].querySelector('.product__quantity-value').innerText) - 1;
        };
    });
};

function addToCart(i) {
    products[i].querySelector('.product__add').addEventListener('click', () => {
        let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        for (let j = 0; j < cartProduct.length; j++) {
            if (cartProduct[j].dataset.id == products[i].dataset.id) {
                cartProduct[j].querySelector('.cart__product-count').innerText = 
                parseInt(cartProduct[j].querySelector('.cart__product-count').innerText) + 
                parseInt(products[i].querySelector('.product__quantity-value').innerText);
                return;
            };
        };

        let productImage = products[i].querySelector('.product__image');
        let htmlContainer = 
        `<div class="cart__product" data-id="${products[i].dataset.id}">
            <img class="cart__product-image" src="${productImage.src}">
            <div class="cart__product-count">${parseInt(products[i].querySelector('.product__quantity-value').innerText)}
            </div>
        </div>`;
    cartProducts.insertAdjacentHTML('beforeEnd', htmlContainer);
    });
};