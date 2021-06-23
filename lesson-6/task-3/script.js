document.querySelector('.slider span:last-child').onclick = slider; //добавляем событие для конопки "пердыдущее фото"
document.querySelector('.slider span:first-child').onclick = slider; //добавляем событие для кнопки "следущее фото"

function slider(e) { //создаем функцию для события 
    var sliderDefault = document.querySelector('.slider_img__active'), //записываем в переменную фото, которое будет отображатся на экране
        sliderN = document.querySelectorAll('.slider_img'); //записываем в переменную остальные фото, которые будут не активны

    sliderDefault.className = 'slider_img'; //изменяем класс активного фото на неактивное для того, чтобы отобразить следущие фото
    if (e.target.innerText.indexOf('Next') === 0) { //делаем проверку, чтобы фото шли поочередно
        if (sliderDefault.nextElementSibling.tagName === 'IMG') {
            sliderDefault.nextElementSibling.className = 'slider_img__active';
        } else {
            sliderN[0].className = 'slider_img__active';
        }
    } else {
        if (sliderDefault.previousElementSibling.tagName === 'IMG') {
            sliderDefault.previousElementSibling.className = 'slider_img__active';
        } else {
            sliderN[sliderN.length - 1].className = 'slider_img__active';
        }
    }
}





