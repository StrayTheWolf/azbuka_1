"use strict";
require('fslightbox');


import {creditSum} from "./credit";

import {scrollFunction, topFunction} from "./topButton";

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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Кнопка вверх


    // Сумма кредита
    creditSum()
})

document.getElementById('1-room').addEventListener('click',()=>{
    document.getElementById('apartment-3').style.display = 'none';
    document.getElementById('apartment-2').style.display = 'none';
    document.getElementById('apartment-1').style.display = 'flex';
})
document.getElementById('2-room').addEventListener('click',()=>{
    document.getElementById('apartment-1').style.display = 'none';
    document.getElementById('apartment-3').style.display = 'none';
    document.getElementById('apartment-2').style.display = 'flex';
})
document.getElementById('3-room').addEventListener('click',()=>{
    document.getElementById('apartment-1').style.display = 'none';
    document.getElementById('apartment-2').style.display = 'none';
    document.getElementById('apartment-3').style.display = 'flex';
})

