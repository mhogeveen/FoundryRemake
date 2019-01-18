$(document).ready(function() {

  // Change the background color of the navigation section after scrolling down a set amount
  $(window).scroll(function() {
    if ($(window).scrollTop() > $('#banner-section').height()) {
      $('#navigation-section').css('border-bottom', '1px solid lightgray');
      $('#navigation-section').css('background-color', 'white');
    }
    if ($(window).scrollTop() < $('#banner-section').height()) {
      $('#navigation-section').css('border-bottom', '1px solid rgba(255, 255, 255, 0)');
      $('#navigation-section').css('background-color', 'rgba(255, 255, 255, 0)');
    }
  });

  // Show mobile view navigation menu on click of 'hamburger' icon
  $('.fa-bars').click(function() {
     if ($('.navigation-container').find('ul').css('display') == 'none') {
       $('.navigation-container').find('ul').css('display', 'flex');
     } else if ($('.navigation-container').find('ul').css('display') == 'flex') {
       $('.navigation-container').find('ul').css('display', 'none');
     }
  });

});
