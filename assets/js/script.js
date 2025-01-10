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

