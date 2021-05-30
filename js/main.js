/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const closeButton = document.querySelector('.okno');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
     
  });
  closeBtn.addEventListener('click', switchModal);
  closeButton.addEventListener('click', switchModal); 

  
});
*/



$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      closeButton = $('.okno');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible')
  });    

  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible')
  });   

  closeButton.on('click', function() {
    modal.toggleClass('modal--visible')
  });   
   

  
});

jQuery(document).ready(function() {
  var btn = $('#button');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() < 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '100');
  });
  
});


document.addEventListener("DOMContentLoaded", function(event) {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: "required",
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: "Имя обязательно",
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"})
});

