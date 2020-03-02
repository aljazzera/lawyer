const menuToggle = document.querySelector('#menu-togle');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
}
// Adaptive Menu
$(document).ready(function(){
  $('.menu-icon').click(function(event){
    $('.menu-icon, .adaptive-nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
// Scroll
$(document).ready(function(){
  $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});