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

// added the second animation to the flowers and the tavoos  
document.addEventListener("DOMContentLoaded", function () {
    // انتخاب تمام تصویرها  
    const flowerImages = document.querySelectorAll('.top-left-flower-image img, .top-right-flower-image img');
    const tavoosImage = document.querySelectorAll('.tavoos-image img');
    const buttonFlowers = document.querySelectorAll('.button-flower-image img');

    // اعمال انیمیشن حرکت نرم پس از پایان انیمیشن  
    flowerImages.forEach((img) => {
        img.addEventListener('animationend', () => {
            // بررسی اگر انیمیشن backInDown یا zoomIn یا fadeIn انجام شده باشد  
            if (img.classList.contains('animate__backInDown')) {
                img.classList.add('animated-move');
            }
        });
    });

    tavoosImage.forEach(function (tavoos) {
        tavoos.addEventListener('animationend', function () {
            if (tavoos.classList.contains('animate__zoomIn')) {
                tavoos.classList.add('animated-move');
            }
        });
    });

    buttonFlowers.forEach(function (buttonFlower) {
        buttonFlower.addEventListener('animationend', function () {
            if (buttonFlower.classList.contains('animate__fadeIn')) {
                buttonFlower.classList.add('animated-move-x');
            }
        });
    });

    

    // مشکل انیمیشن top-left-middle-flower-image  
    const topLeftMiddleFlower = document.querySelector('.top-left-middle-flower-image img');
    const topLeftMiddleFlowerContainer = document.querySelector('.top-left-middle-flower-image');

    topLeftMiddleFlowerContainer.addEventListener('animationend', function () {
        if (topLeftMiddleFlowerContainer.classList.contains('animate__backInLeft')) {
            topLeftMiddleFlower.parentElement.classList.add('move-y');
        }
    });

    const topLeftMiddleFlowerSecond = document.querySelector('.top-left-middle-flower-image.second-image img'); // انتخاب گل دوم  
    const topLeftMiddleFlowerContainerSecond = document.querySelector('.top-left-middle-flower-image.second-image'); // انتخاب container گل دوم  

    topLeftMiddleFlowerContainerSecond.addEventListener('animationend', function () {
        if (topLeftMiddleFlowerContainerSecond.classList.contains('animate__backInLeft')) {
            topLeftMiddleFlowerSecond.parentElement.classList.add('move-y'); // افزودن حرکت به تصویر گل  
        }
    });

    // second slide  

    // متن آدرس  
    const addressText = "123 Anywhere St. Any City, ST 12345";

    // انتخاب عنصر آدرس  
    const addressElement = document.querySelector('.address');

    let addressIndex = 0; // اندیس برای آدرس  

    // تابع تایپ برای آدرس  
    function typeWriterAddress() {
        if (addressIndex < addressText.length) {
            addressElement.innerHTML += addressText.charAt(addressIndex); // اضافه کردن یک حرف به آدرس  
            addressIndex++;
            setTimeout(typeWriterAddress, 100); // زمان تأخیر بین حروف (100 میلی‌ثانیه)  
        }
    }

    // اجرای انیمیشن  
    setTimeout(typeWriterAddress, 3000); // شروع تایپ آدرس بعد از 3 ثانیه  

    // انیمیشن برای carousel  
    
    
    // اگر نیاز دارید که این تابع بر اساس عوض شدن اسلایدها فراخوانی شود  
    document.querySelectorAll('.carousel-control').forEach(control => {  
        control.addEventListener('click', runAnimations);  
    });  
    
    // همچنین می‌توانید بر اساس رویداد تغییر اسلاید مثل wheel در carousel هم فراخوانی شود   

    // اضافه کردن رویدادهای carousel  
    myCarousel.addEventListener('slid.bs.carousel', runAnimations);
    
}); // اینجا پرانتز و اکولاد بسته می‌شود

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

    // اضافه کردن رویداد به تغییر اسلاید  
    myCarousel.addEventListener('slide.bs.carousel', function () {
        var activeSlide = myCarousel.querySelector('.carousel-item.active');
        var animatedItems = activeSlide.querySelectorAll('.animated-item');

        // مخفی کردن المان‌های اسلاید قبلی  
        animatedItems.forEach((item) => {
            item.style.opacity = '0'; // مخفی کردن عنصر  
            setTimeout(() => {
                item.classList.remove('animate__fadeIn'); // حذف کلید واژه انیمیشن  
            }, 500); // مدت زمان انیمیشن (بخش مهم)  
        });
    });

    // اجرای انیمیشن برای اسلاید اول به محض بارگذاری  
    runAnimations();
    myCarousel.addEventListener('slid.bs.carousel', runAnimations);
});

// removing the custom-fadeIn attribute to thoses elements that have it
