// Mobile menu
$(function()  {
  $('.js-menu-toggle').on('click', function()  {
    //$('.js-main-menu').toggleClass('is-open');
    $('.js-main-menu__list').slideToggle();
  });
});

// Accordion
$(document).ready(function()  {
 $(".js-accordion").on("click", ".js-accordion__title", function() {
    $(this).toggleClass("is-active").next().toggle();
 });
});


//fixed sidebar
$(document).ready(function()  {

 
  var topLimit = $('.js-sidebar-fixed').offset().top;

  $(window).scroll(function() {
    //console.log(topLimit <= $(window).scrollTop())
    if (topLimit <= $(window).scrollTop()) {
      $('.js-sidebar-fixed').addClass('sidebar-fixed')
    } else {
      $('.js-sidebar-fixed').removeClass('sidebar-fixed')
    }
  })

});




