var mySwiper = new Swiper('.directions .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    autoHeight: true,

    autoplay: {
        delay: 5000,
    },

    breakpoints: {

        767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
        },

        991: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20
        },

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

$('.open-menu').click(function () {
    $(".mobile-menu-popup").fadeToggle(100);
});

$('.mobile-menu .close').click(function () {
    $(".mobile-menu-popup").fadeToggle(100);
});

$('.mobile-menu--close').click(function () {
    $(".mobile-menu-popup").fadeToggle(100);
});



$('.schedule-popup__open').click(function () {
    $(".schedule-popup").fadeToggle(100);
});

$('.schedule-popup--close').click(function () {
    $(".schedule-popup").fadeToggle(100);
});