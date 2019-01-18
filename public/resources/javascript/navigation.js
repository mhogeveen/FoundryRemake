$(document).ready(function() {

  // Change the background color of the navigation section after scrolling down a set amount
  $(window).scroll(function() {
    if ($(window).width() > 600) {
      if ($(window).scrollTop() > $('#banner-section').height()) {
        $('#navigation-section').css('border-bottom', '1px solid lightgray');
        $('#navigation-section').css('background-color', 'white');
      }
      if ($(window).scrollTop() < $('#banner-section').height()) {
        $('#navigation-section').css('border-bottom', '1px solid rgba(255, 255, 255, 0)');
        $('#navigation-section').css('background-color', 'rgba(255, 255, 255, 0)');
      }
    } else {
      $('#navigation-section').css('border-bottom', '1px solid lightgray');
      $('#navigation-section').css('background-color', 'white');
    }
  });

  // Check if the window width is or is below the navigation breakpoint
  function checkWidth() {
    var windowSize = $(window).width();
    if (windowSize <= 600) {
      $('#navigation-section').css('border-bottom', '1px solid lightgray');
      $('#navigation-section').css('background-color', 'white');
    }
  }

  checkWidth();

  // Show mobile view navigation menu on click of 'hamburger' icon
  $('.fa-bars').click(function() {
     if ($('.navigation-container').find('ul').css('opacity') == '0') {
       $('.navigation-container').find('ul').animate({'opacity': '1'});
       $('.navigation-container').find('i').removeClass('fa-bars');
       $('.navigation-container').find('i').addClass('fa-times');
     } else if ($('.navigation-container').find('ul').css('opacity') == '1') {
       $('.navigation-container').find('ul').animate({'opacity': '0'});
       $('.navigation-container').find('i').removeClass('fa-times');
       $('.navigation-container').find('i').addClass('fa-bars');
     }
  });

});
