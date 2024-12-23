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

// add animation to the invite-message element

const message = "YOU ARE INVITED TO A WEDDING PARTY";  
const inviteElement = document.getElementById("invite-message");  
let index = 0;  

function typeWriter() {  
    if (index < message.length) {  
        inviteElement.innerHTML += message.charAt(index);  
        index++;  
        setTimeout(typeWriter, 100); // زمان تاخیر بین حروف (100 میلی‌ثانیه)  
    }  
}  

// اجرای انیمیشن محو شدن  
inviteElement.style.opacity = 1; // محو بودن  
inviteElement.style.animation = 'show 1s forwards'; // نمایش  
setTimeout(typeWriter, 1000); // شروع تایپ بعد از 1 ثانیه


// document.addEventListener('DOMContentLoaded', function () {
//     var elements = document.querySelectorAll('.animated-item');

//     elements.forEach((element) => {
//         element.style.animationDelay = `.7s`;
//         element.style.opacity = '1'; 
//         element.classList.add('animate__fadeIn'); 
//     });
// });



// couples-name

document.addEventListener('DOMContentLoaded', function () {  
    var groomsElements = document.querySelectorAll('#couples-name .animated-item');  
    var bridesElements = document.querySelectorAll('#brides-name .animated-item');  
    var groomsDelay = 0.5; // زمان پایه تاخیر برای grooms-name  
    var bridesDelay = 0.5; // زمان پایه تاخیر برای brides-name  

    // انیمیشن grooms-name  
    groomsElements.forEach((element, index) => {  
        var animationDelay = `${groomsDelay + index * 0.2}s`;  
        element.style.animationDelay = animationDelay;  
        element.style.opacity = '0'; // برای شروع با شفافیت صفر  
        element.classList.add('animate__animated', 'animate__fadeInUp'); // اضافه کردن کلاس انیمیشن  

        // یک تایمر برای نمایش دادن آن  
        setTimeout(() => {  
            element.style.opacity = '1'; // تنظیم شفافیت به 1 برای ظهور  
        }, groomsDelay * 1000 + index * 200); // زمان بر حسب میلی ثانیه  
    });  

    // محاسبه زمان پایان انیمیشن grooms-name  
    var totalGroomsAnimationTime = (groomsDelay + (groomsElements.length - 1) * 0.2) * 1000 + groomsElements.length * 200;  

    // انیمیشن brides-name بعد از اتمام grooms-name  
    setTimeout(() => {  
        bridesElements.forEach((element, index) => {  
            var animationDelay = `${bridesDelay + index * 0.2}s`;  
            element.style.animationDelay = animationDelay;  
            element.style.opacity = '0'; // برای شروع با شفافیت صفر  
            element.classList.add('animate__animated', 'animate__fadeInUpBig'); // اضافه کردن کلاس انیمیشن  

            // یک تایمر برای نمایش دادن آن  
            setTimeout(() => {  
                element.style.opacity = '1'; // تنظیم شفافیت به 1 برای ظهور  
            }, bridesDelay * 1000 + index * 200); // زمان بر حسب میلی ثانیه  
        });  

        // تنظیم شفافیت کل brides-name به 1  
        document.getElementById('brides-name').style.opacity = '1';  
    }, totalGroomsAnimationTime); // شروع انیمیشن brides-name بعد از اتمام grooms-name  
});

// top-middle-left-flower

