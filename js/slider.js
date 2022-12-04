$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

window.addEventListener('DOMContentLoaded', ()=> {
    const slides      = document.querySelectorAll('.text-block'),
          names       = document.querySelectorAll('.testimonials__name'),
          prev        = document.querySelector('#testimonials-prev'),
          next        = document.querySelector('#testimonials-next'),
          slide_count = document.querySelector('#review_count'),
          allslides   = slides.length,
          stars       = document.querySelectorAll('.testimonials__star');


    let slide_number = 0,
        rating = [5, 5, 4];


    //инициализировать слайды и счётчик
    const initSlides = function() {
        slides.forEach((slide, id)=> {
            if (id === slide_number) {
                slide.classList.remove('text-block_hidden');
            } else {
                slide.classList.add('text-block_hidden');
            }
        });
        names.forEach((name, id)=> {
            if (id === slide_number) {
                name.classList.remove('text-block_hidden');
            } else {
                name.classList.add('text-block_hidden');
            }
        });
        countSlides();
        fillStars();
    };

    //звёзды
    const fillStars = function() {
        stars.forEach((star)=> {
            star.classList.remove('testimonials__star_filled');
        });
        for (let i = 0; i < rating[slide_number]; i++) {
            stars[i].classList.add('testimonials__star_filled');
        }
    }


    //функция переключения слайдов
    const changeSlides = function() {
        prev.addEventListener('click', ()=> {
            slide_number--;
            loopSlides();
        });
        next.addEventListener('click', ()=> {
            slide_number++;
            loopSlides();
        });
    };

    //бесконечно переключать слайды в обе стороны
    const loopSlides = function() {
        if (slide_number < 0) {
            slide_number = 2;
            initSlides();
        } else if (slide_number > 2){
            slide_number = 0;
            initSlides();
        } else {
            initSlides();
        }
    }
    //счётчик слайдов
    const countSlides = function() {
        slide_count.textContent = `${slide_number + 1} / ${allslides}`;
    };
    initSlides();
    changeSlides();


    //тёмная/светлая тема
    const themebutton = document.querySelectorAll('.header__theme');
    let darktheme = false;

    const initTheme = function() {
        const css_link = document.querySelector('.stylesheet_link');
    
        if (darktheme) {
            css_link.setAttribute("href", 'css/main.css');
        } else {
            css_link.setAttribute("href", 'css/dark.css');
    
        }
    }

    initTheme();

    const changeTheme = function() {
        themebutton.forEach((button)=>{button.addEventListener('click', ()=> {
            darktheme = !darktheme;
            themebutton.forEach((button)=>{button.classList.toggle('changed-to-dark')});
            initTheme();
        })});
    }

    changeTheme();

    //smooth scroll

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //русский/английский язык

    const langButton = document.querySelectorAll('.header__lang');
    let langState = true;
    
    langButton.forEach((button)=>{button.addEventListener('click', ()=> {
        langState = !langState;
        if (langState) {
            document.querySelectorAll('.en-lang').forEach((element)=>{
                element.style = 'display:none';
            });
            document.querySelectorAll('.ru-lang').forEach((element)=>{
                element.style = 'display:inherit';
            });
        }
        else {
            document.querySelectorAll('.ru-lang').forEach((element)=>{
                element.style = 'display:none';
            });
            document.querySelectorAll('.en-lang').forEach((element)=>{
                element.style = 'display:inherit';
            });
        }
    })});

    if (langState) {
        document.querySelectorAll('.en-lang').forEach((element)=>{
            element.style = 'display:none';
        });
        document.querySelectorAll('.ru-lang').forEach((element)=>{
            element.style = 'display:inherit';
        });
    }
    else {
        document.querySelectorAll('.ru-lang').forEach((element)=>{
            element.style = 'display:none';
        });
        document.querySelectorAll('.en-lang').forEach((element)=>{
            element.style = 'display:inherit';
        });
    }

    //бургер меню

    const burgerMenu = document.querySelector('#burger-menu'),
          openBurger = document.querySelector('#openBurger'),
          closeBurger = document.querySelector('#burger-menu__close');

    openBurger.addEventListener('click', ()=> {
        burgerMenu.classList.add('burger-menu__active')
    });
    closeBurger.addEventListener('click', ()=> {
        burgerMenu.classList.remove('burger-menu__active')
    });

});