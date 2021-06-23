
var productsItems = document.querySelector(".products-items"), //получаем блок для вывода товаров и записываем его в переменную
    products = { //создаем массив товаров 
        item1: ['1.jpg', 'Rainbow blouse', 50.340],
        item2: ['2.jpg', 'Classic jacket', 45],
        item3: ['3.jpg', 'Denim jacket', 30]
    };

for (var key in products) { //создаем цикл для вывода массива товаров

    var productsDiv = document.createElement('div'), //создаем блок товара
        img = document.createElement('img'), // создаем тег для вывода картинки
        h2 = document.createElement('h2'), // создаем тег для вывода наименования товара
        span = document.createElement('span'), // тег для вывода цены
        button = document.createElement('button'); // создаем тег для кнопки

    productsDiv.className = 'products-div'; //добавляем класс для блока товара
    img.src = 'img/' + products[key][0]; //путь картинки, где key - это номер товара, 0 - это первая фотография
    h2.innerHTML = products[key][1]; //записываем наименование товара
    span.innerHTML = products[key][2]; //записываем цену товара
    button.innerHTML = 'Купить'; //записываем кнопку для покупки
    productsDiv.innerHTML = img.outerHTML + h2.outerHTML + span.outerHTML; //записываем все товары в блок productsDiv

    button.onclick = function (e) { //добавляем функцию, которая при нажатии на кнопку создает блок корзины и добавляет в этот блок товары
        var price = e.target.parentNode.querySelector('span').cloneNode(true), //клонируем цену в блок корзины
            img = e.target.parentNode.querySelector('img').cloneNode(true), //копируем изображение товара в корзину
            title = e.target.parentNode.querySelector('h2').cloneNode(true), //копируем наименование товара в корзину
            cart = document.querySelector('.products-cart'), //записываем блок корзины и записываем его в переменную
            cartDiv = document.createElement('div'); //создаем блок для товаров в корзине
        cartDiv.className = 'products-cart-items'; //добавляем класс для блока товаров в корзине
        cartDiv.innerHTML += img.outerHTML + title.outerHTML + price.outerHTML; //записываем данные товаров в блок товаров корзины
        cartDiv.onclick = function () { cartDiv.remove(); total(); }; //добавляем функцию удаления созданного товара при нажатии на него
        cart.prepend(cartDiv); //записываем товары в блок корзины
        total(); //вызываем функцию подсчета суммы товаров в корзины
    };
    productsDiv.append(button); //выводим на экран кнопку добавления товара в корзину
    productsItems.append(productsDiv); //выводим на экран товары
}
function total() { //создаем функцию подсчета суммы товаров в корзине
    var cartSubtotal = document.querySelector('.products-cart-subtotal h2'), //записываем subtotal в переменную
        price = document.querySelectorAll('.products-cart .products-cart-items span'), //записываем цену в переменную
        total = 0; //создаем переменную для подсчета суммы товаров
    for (var i = 0; i <= price.length - 1; i++) { //создаем цикл, который подсчитывает сумму товаров 
        total += +price[i].innerHTML; //записываем в переменную total сумму товаров
    }
    cartSubtotal.innerHTML = 'Subtotal: ' + total.toFixed(2) + '$'; //выводим общую сумму товаров с двумя знаками после запятой
}











// for (var key in products) {
//     var el = document.createElement('div'),
//         img = document.createElement('img'),
//         h3 = document.createElement('h3'),
//         span = document.createElement('span'),
//         button = document.createElement('button');

//     el.className = 'et_second_task__product';
//     img.src = 'img/' + products[key][0];
//     h3.innerHTML = products[key][1];
//     span.innerHTML = products[key][2];
//     button.innerHTML = 'Purchase';
//     el.innerHTML = img.outerHTML + h3.outerHTML + span.outerHTML;

//     button.onclick = function (e) {
//         var price = e.target.parentNode.querySelector('span').cloneNode(true),
//             img = e.target.parentNode.querySelector('img').cloneNode(true),
//             title = e.target.parentNode.querySelector('h3').cloneNode(true),
//             el2 = document.querySelector('.et_second_task__basket'),
//             div = document.createElement('div');
//         div.className = 'et_second_task__basket_product';
//         div.innerHTML += img.outerHTML + title.outerHTML + price.outerHTML;
//         div.onclick = function () { div.remove(); total(); };
//         el2.prepend(div);
//         total();
//     };
//     el.append(button);
//     productsDiv.append(el);
// }

// function total() {
//     var el = document.querySelector('.et_second_task__basket_subtotal h2'),
//         price = document.querySelectorAll('.et_second_task__basket .et_second_task__basket_product span'),
//         total = 0;
//     for (var i = 0; i <= price.length - 1; i++) {
//         total += +price[i].innerHTML;
//     }
//     el.innerHTML = 'Subtotal: ' + total.toFixed(2);
