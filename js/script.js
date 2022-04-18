// Меню бургер ------------------------------------------------
let menu__burger = document.querySelector('.menu__burger');
let header__menu = document.querySelector('.header__menu');
menu__burger.addEventListener('click', function(){
    menu__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    document.body.classList.toggle('lock');// Убираем прокрутку при открытом меню бургер
});

// Закрытие меню при клике на ссылку --------------------------
let menu__list = document.querySelector('.menu__list');
menu__list.addEventListener('click', function() {
    header__menu.classList.toggle('active');
    menu__burger.classList.toggle('active');
});