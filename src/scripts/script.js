"use strict";

document.addEventListener("DOMContentLoaded", () => {

    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 4,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },

    });
})

