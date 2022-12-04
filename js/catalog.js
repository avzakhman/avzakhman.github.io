

window.addEventListener('DOMContentLoaded', ()=> {


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