// прослушка на всём окне
window.addEventListener('click', function (event) {


    // переменная для счетчика
     let counter;

    // проверка что клик строго по нужным кнопкам
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // нахожу обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // нахожу див с числом счетчика и записываю в перемнную
        counter = counterWrapper.querySelector('[data-counter]');
    }

    
    // проверка, что кнопка плюс
    if (event.target.dataset.action === 'plus') {
        // увеличиваю счётчик на 1
        counter.innerText = ++counter.innerText;
    }

    // проверка, что кнопка минус
    if (event.target.dataset.action === 'minus') {
        
        if ( parseInt(counter.innerText) > 1){
            // меняю счётчик на -1
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) { //проверка на товар который находится в корзине
        // удаляю из корзины
        event.target.closest('.cart-item').remove();

        toggleCartStatus();
        
        calcCartPriceAndDelivery ();
        }
        
    }


    // проверяю клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery ();

    }
})