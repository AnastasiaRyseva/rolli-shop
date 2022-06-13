function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmtyBadge = document.querySelector('[data-cart-empty]');
    

    const orderForm = document.querySelector('#order-form');


    if (cartWrapper.children.length > 0) {
        cartEmtyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmtyBadge.classList.remove('none')
        orderForm.classList.add('none');
    };

    
}