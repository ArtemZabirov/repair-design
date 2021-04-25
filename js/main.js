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


