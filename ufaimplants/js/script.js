
let isactive = false;
const activateform = document.querySelectorAll('.activate-form');
activateform.forEach((button)=> {
    button.addEventListener('click', ()=> { 
        isactive = true; 
        activateWindow();
    });
});

const activateWindow = () => {
    if (isactive == true){
        formmenu = document.querySelector('.formmenu');
        formmenu.classList.remove('formmenu_hidden');
        window.addEventListener('click', (e)=> {
            console.log(e.target.className);
            if (e.target.className === 'darker-backgrnd') {
                formmenu.classList.add('formmenu_hidden');
                isactive = false;
            }
        });
    }
}

const changeMain = () => {
    document.querySelector('h1').textContent = 'Спасибо!';
    document.querySelector('.mainpage__texts').querySelector('p').textContent = 'Мы с вами свяжемся по указанному телефону в ближайшее время';
    document.querySelector('main').classList.add('thanks');
    document.querySelector('.formmenu').classList.remove('formmenu_error');
    document.querySelector('.formmenu').classList.add('formmenu_hidden');
}

const indicateError = () => {
    document.querySelector('.formmenu').classList.add('formmenu_error');
}


$('#form-submit').click(function (e) {
    e.preventDefault();
    document.querySelector('.loading').classList.remove('loading_hidden');

    let name = $('input[name="name"]').val(),
        phone = $('input[name="phone"]').val();

    $.ajax({
        url: 'send.php',
        type: 'POST',
        dataType: 'json',
        data: {
            name: name,
            phone: phone
        },
        success (data) {

            if (data.status) {
                document.querySelector('.loading').classList.add('loading_hidden');
                changeMain();
                
            } else if (data.status == false){
                document.querySelector('.loading').classList.add('loading_hidden');
                indicateError();
            }

        }
    });

});

const slides = document.querySelectorAll(".slide"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next");

      prev.addEventListener('click', ()=> {
        count--;
        if (count < 0) {
            count = 5;
            changeSlide();
        } else {
            changeSlide();
        }
      });
      next.addEventListener('click', ()=> {
        count++;
        if (count > 5) {
            count = 0;
            changeSlide();
        } else {
            changeSlide();
        }
      });

let count = 1;
const changeSlide = function () {
    slides.forEach((slide, id) => {
        console.log(slide);
        if (id != count) {
            slide.classList.add("slide_hidden") ;
        } else {
            slide.classList.remove("slide_hidden") ;
        }
    });    
}
