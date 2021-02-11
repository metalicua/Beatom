let itemInfo = {
    'items': [
        {
            "image_url": "img/item1.png",
            'itemDiscription': 'Разработка  индивидуального технического задания'
        },
        {
            "image_url": "img/item2.png",
            'itemDiscription': 'Проектные работы'
        },
        {
            "image_url": "img/item3.png",
            'itemDiscription': 'Бетонно-фундаментные  работы '
        },
        {
            "image_url": "img/item4.png",
            'itemDiscription': 'Общестроительные  работы'
        },
        {
            "image_url": "img/item5.png",
            'itemDiscription': 'Фасадные работы'
        },
        {
            "image_url": "img/item6.png",
            'itemDiscription': ' Cантехнические работы'
        },
        {
            "image_url": "img/item7.png",
            'itemDiscription': 'Электромонтажные  работы'
        },
      
        {
            "image_url": "img/item8.png",
            'itemDiscription': 'Отделка помещений'
        },
        {
            "image_url": "img/item9.png",
            'itemDiscription': 'Общестроительные  работы'
        },
        {
            "image_url": "img/item10.png",
            'itemDiscription': 'Устройство полов  любой сложности'
        },
        {
            "image_url": "img/item11.png",
            'itemDiscription': 'Декоративные/ художественные полы'
        },
        {
            "image_url": "img/item12.png",
            'itemDiscription': 'Наливные полы'
        },
        {
            "image_url": "img/item13.png",
            'itemDiscription': 'Подключение  системы "умный дом"'
        },
        {
            "image_url": "img/item14.png",
            'itemDiscription': 'Ландшафтный дизайн'
        },
        {
            "image_url": "img/item15.png",
            'itemDiscription': 'Техническое  оборудование  придомовой территории'
        }, 
    ]
};

$(document).ready(function(){
    // handlebars

    let $itemTemplate = $('#itemTemplate').html(),
        $compItemTemplate = Handlebars.compile($itemTemplate),
        $template =  $('#js-template'),
        $squareValue = $('.sqare_value'),
        $inputRange = $('input[type="range"]'),
        $cost = $('.cost'),
        $arrowLeft = $('.js_arrow_left'),
        $arrowRight = $('.js_arrow_right'),
        $popUP = $('.pop-up'),
        $popUpOpen = $('.progect__link'),
        $popUpClose = $('.close_link');

    $($template).html($compItemTemplate(itemInfo));

    //RangeSlider
    $($squareValue).html($($inputRange).val());

    $(document).on('input change', 'input[type="range"]', function() {
         $($squareValue).html($(this).val());
         $($cost).html($(this).val() * 2290);
    });

    //SlickSlider
    $('.feedback__box').slick({
        dots: true,
        prevArrow: $($arrowLeft),
        nextArrow: $($arrowRight),
    });

    //PopUP 
    $popUpOpen.click(function (event) {
        event.preventDefault()
        $popUP.addClass('d_block');
    });

    $popUpClose.click(function (e) {
        e.preventDefault()
        $popUP.removeClass('d_block');
        
    });
 
});

