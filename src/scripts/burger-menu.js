'use strict'

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.menu__open').addEventListener('click', ()=>{
        document.querySelector('.menu__open').style.display = 'none';
        document.querySelector('.menu__close').style.display = 'block';
        document.querySelector('.menu__list').style.display = 'flex';
        document.querySelector('.menu-contact').style.display = 'none';

    });
    document.querySelector('.menu__close').addEventListener('click', ()=>{
        document.querySelector('.menu__close').style.display = 'none';
        document.querySelector('.menu__open').style.display = 'block';
        document.querySelector('.menu__list').style.display = 'none';
        document.querySelector('.menu-contact').style.display = 'block';
    });
});
