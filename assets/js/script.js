const message = "YOU ARE INVITED TO A WEDDING PARTY";
const inviteElement = document.getElementById("invite-message");
let index = 0;

function typeWriter() {
    if (index < message.length) {
        inviteElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // زمان تاخیر بین حروف (100 میلی‌ثانیه)  
    }
}

// اجرای انیمیشن محو شدن  
inviteElement.style.opacity = 1; // محو بودن  
inviteElement.style.animation = 'show 1s forwards'; // نمایش  
setTimeout(typeWriter, 1000); // شروع تایپ بعد از 1 ثانیه  

// couples-name  

document.addEventListener('DOMContentLoaded', function () {
    var groomsElements = document.querySelectorAll('#couples-name .animated-item');
    var bridesElements = document.querySelectorAll('#brides-name .animated-item');
    var groomsDelay = 3; // زمان پایه تاخیر برای grooms-name  
    var bridesDelay = 3.5; // زمان پایه تاخیر برای brides-name  

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



window.addEventListener('load', function () {
    console.log('loaded');
})

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 7000,
        ride: 'carousel'
    });

    // تابع برای اجرای انیمیشن‌ها  
    function runAnimations() {
        // انتخاب تمامی عناصر با کلاس animated-item در اسلاید فعال  
        var activeSlide = myCarousel.querySelector('.carousel-item.active');
        var animatedItems = activeSlide.querySelectorAll('.animated-item');

        animatedItems.forEach((item) => {
            item.style.opacity = '1'; // برای نمایش عنصر   
            item.style.animationDelay = `0.7s`; // تأخیر انیمیشن   
            item.classList.add('animate__fadeIn'); // کلاس انیمیشن  
        });
    }

});

// snow

document.addEventListener('DOMContentLoaded', () => {
    // تابع ایجاد برف  
    function createSnowflake(snowContainer) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // تنظیم موقعیت افقی برف  
        const randomX = Math.random() * window.innerWidth;
        snowflake.style.left = `${randomX}px`;

        // تنظیم اندازه ذره برف  
        const size = Math.random() * 5 + 2; // اندازه‌ای بین 2 تا 7 پیکسل  
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // افزودن برف به صفحه  
        snowContainer.appendChild(snowflake);

        // انیمیشن سقوط  
        const duration = `${Math.random() * 3 + 2}s`; // بین 2 تا 5 ثانیه  
        snowflake.style.animation = `fall ${duration} linear`;

        // حذف ذره برف بعد از اتمام انیمیشن  
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // تابع شروع بارش برف  
    function startSnowfall() {
        const snowContainers = document.querySelectorAll('.snow'); // انتخاب تمامی عناصر برف  
        // شروع بارش برف در تمامی اسلایدها  
        setTimeout(() => {
            snowContainers.forEach(snowContainer => {
                setInterval(() => createSnowflake(snowContainer), 200); // هر 200 میلی‌ثانیه یک ذره برف ایجاد کن  
            });
        }, 1000); // 1 ثانیه تاخیر قبل از شروع بارش  
    }

    // آغاز بارش برف  
    startSnowfall();
});

//perload

let loader = document.querySelector('.loader');

window.addEventListener('load', function () {
    loader.classList.add('hidden');
});

// playing background song 

// انتخاب عناصر  
const playButton = document.querySelectorAll('play-icon');  
const pauseButton = document.querySelectorAll('pause-icon');  
const audio = document.getElementById('background-music'); // انتخاب تگ audio  

console.log(playButton, pauseButton, audio);

let isPlaying = false; // وضعیت پخش  

// تابع پخش و توقف موسیقی  
function togglePlayPause() {  
    if (!isPlaying) {  
        audio.play(); // پخش موسیقی  
        playButton.style.display = 'none'; // مخفی کردن دکمه پخش  
        pauseButton.style.display = 'block'; // نمایش دکمه توقف  
    } else {  
        audio.pause(); // توقف موسیقی  
        playButton.style.display = 'block'; // نمایش دکمه پخش  
        pauseButton.style.display = 'none'; // مخفی کردن دکمه توقف  
    }  
    isPlaying = !isPlaying; // تغییر وضعیت  
}  

// اضافه کردن رویداد کلیک به دکمه پخش و توقف  
playButton.addEventListener('click', togglePlayPause);  
pauseButton.addEventListener('click', togglePlayPause);

// document.addEventListener('DOMContentLoaded', () => {  
//     const music = document.getElementById('background-music');  
//     music.play().catch(error => {  
//         // اگر پخش خودکار به دلیل تنظیمات مرورگر متوقف شد، می‌توانید پیغام خطا را لاگ کنید  
//         console.log('The autoplay was prevented:', error);  
//     });  
// });

// document.addEventListener('DOMContentLoaded', (event) => {  
//     event.preventDefault();
//     const music = document.getElementById('background-music');  
//     music.volume = 0; // تنظیم صدا به ۰.  
//     music.play().then(() => {  
//         setTimeout(() => {  
//             music.volume = 1; // حجم صدا را زیاد کنید.  
//         }, 1000);  
//     }).catch(error => {  
//         console.error('The autoplay was prevented:', error);  
//     });  
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const music = document.getElementById('background-music');
//     const button = document.getElementById('play-pause-button');
//     let isPlaying = false;

//     button.addEventListener('click', () => {
//         if (!isPlaying) {
//             music.volume = 0; // تنظیم صدا به ۰.  
//             music.play().then(() => {
//                 setTimeout(() => {
//                     music.volume = 1; // حجم صدا را زیاد کنید.  
//                 }, 1000);
//             }).catch(error => {
//                 console.error('The autoplay was prevented:', error);
//             });
//             button.src = 'pause.png'; // تغییر تصویر به Pause  
//         } else {
//             music.pause(); // توقف آهنگ  
//             button.src = 'play.png'; // تغییر تصویر به Play  
//         }
//         isPlaying = !isPlaying; // تغییر وضعیت پخش  
//     });
// });

// disable the prve btn arrow for firt slide

document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector('#carouselExample');

    // دکمه قبلی  
    const prevButton = document.querySelector('#prevButton');

    // بررسی وضعیت اسلاید  
    carouselElement.addEventListener('slid.bs.carousel', function () {
        const activeIndex = [...carouselElement.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));

        if (activeIndex === 0) {
            prevButton.classList.add('disabled-button');
        } else {
            prevButton.classList.remove('disabled-button');
        }
    });

    // غیر فعال کردن دکمه در بارگذاری اولیه  
    prevButton.classList.add('disabled-button');
});