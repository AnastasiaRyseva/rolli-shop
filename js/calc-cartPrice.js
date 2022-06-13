function calcCartPriceAndDelivery () {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElem = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceElem = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const CartDelivery = document.querySelector('[data-cart-delivery]');


    let totalPrice = 0;

    priceElem.forEach(function (item) {
    const amountElem = item.closest('.cart-item').querySelector('[data-counter]');

    totalPrice += parseInt(amountElem.innerText) * parseInt(item.innerText);
    })

    totalPriceElem.innerText = totalPrice;

    if ( totalPrice > 0) {
        CartDelivery.classList.remove('none')
    } else {
        CartDelivery.classList.add('none')
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else if (totalPrice !== 0) {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
        totalPrice += parseInt(deliveryCost.innerText)
    };

    totalPriceElem.innerText = totalPrice;
}