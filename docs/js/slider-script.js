// Slick Slider
$(document).ready(function() {
    $('.slider').slick({
        arrows: true, // Cтрелки (true/false)
        dots: false, // Точки (true/false)
        adaptiveHeight: false, // Автоматическая адаптивная высота слайдера (true/false) (не забываем про изменения в стилях .slider-track - align items: flex-start;)
        slidesToShow: 1, // Количество слайдов, необходимое показать за раз
        slidesToScroll: 1, // Количество слайдов, необходимое проскролить за раз
        speed: 1000, // Скорость пролистывания слайдов
        //easing: 'linear', // Тип анимации при смене слайда. Свойства как в css
        infinite: false, // Бесконечность прокрутки слайдов (true/false)
        initialSlide: 0, // Стартовый слайд (Номер слайда)
        autoplay: false, // Автоматическая прокрутка слайдов (true/false)
        autoplaySpeed: 1000, // Скорость автоматической прокрутки
        pauseOnFocus: false, // Пауза в фокусе (true/false)
        pauseOnHover: false, // Пауза при наведении (true/false)
        pauseOnDotsHover: false, // Пауза при наведении на точки (true/false)
        draggable: true, // регулирует возможность пролистывания свайпом мышки на ПК (true/false)
        swipe: true, // регулирует возможность пролистывания свайпом на тачскринах (true/false)
        touchTreshold: 10, // Регулирует момент срабатывания слайда при свайпе
        touchMove: true, // Регулирует возможности свайпа слайдера. (true/false)
        waitForAnimate: false, // Регулирует процесс скорости анимации перелистывания слайдов (true/false)
        centerMode: true, // Центрирует активный слайд (true/false)
        variableWidth: false, // Позволяет слайдеру самому определять ширину содержимого слайда (true/false)
        rows: 1, // Количество рядов слайдера
        slidesPerRow: 1, // Количество слайдов в ряду
        vertical: false, // Вертикальный слайдер (true/false)
        verticalSwiping: false, // Вертикальная прокрутка для вертикального слайдера (true/false)
        fadae: false, //  (true/false) Используется только при отображении одной картинки в слайде, слайды в слайдере будут заменяться один за одним с затемнением
        
        //  asNavFor:"Класс Слайдера", - Применяется для связки двух слайдеров. Задаётся обоим слайдерам, и прописывается класс слайдера, который нужно привязать

        //  responsive:[
        //   {
        //      breakpoint: 768,
        //      settings: {}
        //    },{
        //      breakpoint: 1200,
        //      settings: {}
        //    }
        //  ]

        // mobileFirst: true, - Меняет точки перелома с max-width на min-width (true/false)

        // Если картинкам путь указать не через src, а через data-lazy, то картинки будут прогружаться во время скролла, а не все сразу

        // appendArrows: $('.класс блока'), - Класс блока, в который мы хотим поместить наши стрелочки, их можно перемещать прямо тут
        // appendDots: $('.класс блока'), - То же самое, но с точками
    });
}); 