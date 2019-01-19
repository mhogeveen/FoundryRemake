$(document).ready(function() {

  // Change the background color of the navigation section after scrolling down a set amount
  $(window).scroll(function() {
    if ($(window).width() > 600) {
      if ($(window).scrollTop() > $('#banner-section').height()) {
        $('#navigation-section').css({'border-bottom': '1px solid lightgray', 'background-color': 'white'});
      }
      if ($(window).scrollTop() < $('#banner-section').height()) {
        $('#navigation-section').css({'border-bottom': '1px solid rgba(255, 255, 255, 0)', 'background-color': 'rgba(255, 255, 255, 0)'});
      }
    } else {
      $('#navigation-section').css({'border-bottom': '1px solid lightgray', 'background-color': 'white'});
    }
  });

  // Check if the window width is or is below the navigation breakpoint on page load
  function checkWidth() {
    var windowSize = $(window).width();
    if (windowSize <= 600) {
      $('#navigation-section').css({'border-bottom': '1px solid lightgray', 'background-color': 'white'});
    }
  }

  checkWidth();

  // Check the resizing of the window if width goes over the navigation breakpoint
  $(window).resize(function() {
    var windowSize = $(window).width();
    if (windowSize > 600) {
      $('#navigation-section').css({'border-bottom': '1px solid rgba(255, 255, 255, 0)', 'background-color': 'rgba(255, 255, 255, 0)'});
      $('.navigation-container ul').css('opacity', '1');
      $('.navigation-container i').removeClass('fa-bars fa-times');
      $('.navigation-container i').addClass('fa-bars');
    } else if (windowSize <= 600) {
      $('#navigation-section').css({'border-bottom': '1px solid lightgray', 'background-color': 'white'});
      $('.navigation-container ul').css('opacity', '0');
    }
  });

  // Show mobile view navigation menu on click of 'hamburger' icon
  $('.menu-button').click(function() {
    $('.navigation-container i').toggleClass('fa-bars fa-times');
     if ($('.navigation-container ul').css('opacity') == '0') {
       $('.navigation-container ul').animate({'opacity': '1'});
     } else if ($('.navigation-container ul').css('opacity') == '1') {
       $('.navigation-container ul').animate({'opacity': '0'});
     }
  });

});
