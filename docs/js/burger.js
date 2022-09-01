// Script Menu Burger
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu__burger').toggleClass('active');
        //$('body').toggleClass('lock');
    });
});

//(2) Вешаем событие по клику на бургер
//(3) Бургеру и меню добавляем класс active
//(4) Блокируем прокрутку body при открытом меню