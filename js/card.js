
const cartWrapper = document.querySelector('.cart-wrapper');
// отслеживаю клик на странице
window.addEventListener('click', function(event){
    
// проверка, что клик совершён по кнопке добавить в корзину
    if (event.target.hasAttribute('data-cart')){
        
        //нахожу карточку с товаром в которой совершен клик

        const card = event.target.closest('.card');

        // собираю данные с карточки и записываю в единый объект

        const productInfo = {
            id: card.dataset.id,
            imageSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
    
        //проверка есть ли элемент в корзине
       
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        

        // если товар есть в корзине
        if (itemInCart) {
            const counterElem = itemInCart.querySelector('[data-counter]');
            counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.counter);
        } else {
            //если нет в корзине

        

        //собранные данные подставим в шаблон для товара в корзине

        const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
            <img src="${productInfo.imageSrc}" alt="${productInfo.title}"
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>`
        // отображаю товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        }


        // сбрасываю счетчик на 1
        card.querySelector('[data-counter]').innerText = '1'

        // отображение статуса корзины: пустая или полная
        toggleCartStatus();
        // пресчет общей стоимости товаров
        calcCartPriceAndDelivery ();
    }
})