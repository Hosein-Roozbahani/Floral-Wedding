// script.js  
const swiper = new Swiper('.swiper-container', {  
    slidesPerView: 1,   
    spaceBetween: 0,  
    loop: true, // حلقه زدن اسلاید‌ها  
    navigation: { // دکمه‌های ناوبری  
        nextEl: '.swiper-button-next',  
        prevEl: '.swiper-button-prev',  
    },  
    pagination: { // دات‌ها  
        el: '.swiper-pagination',  
        clickable: true,  
    },  
    autoplay: {  
        delay: 50000 
    }  
});