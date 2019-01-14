$(document).ready(function() {

  // When .btn1 is clicked:
  $('.btn1').click(function() {
    $('.rev1').animate({'left': '15%'});
    $('.rev2,.rev3').animate({'left': '100%'});
    $('.btn1,.btn2,.btn3').removeClass('active inactive');
    $('.btn1').addClass('active');
    $('.btn2,.btn3').addClass('inactive');
  });

  // When .btn2 is clicked:
  $('.btn2').click(function() {
    $('.rev1').animate({'left': '-100%'});
    $('.rev2').animate({'left': '15%'});
    $('.rev3').animate({'left': '100%'});
    $('.btn1,.btn2,.btn3').removeClass('active inactive');
    $('.btn1,.btn3').addClass('inactive');
    $('.btn2').addClass('active');
  });

  // When .btn3 is clicked:
  $('.btn3').click(function() {
    $('.rev1,.rev2').animate({'left': '-100%'});
    $('.rev3').animate({'left': '15%'});
    $('.btn1,.btn2,.btn3').removeClass('active inactive');
    $('.btn1,.btn2').addClass('inactive');
    $('.btn3').addClass('active');
  });

  // Click .btn1 on load of the page
  $('.btn1').trigger('click');

  // Click review section buttons after set intervals
  setTimeout(function() {
    setInterval(function() {
      $('.btn1').trigger('click');
    }, 30000);
  }, 0);

  setTimeout(function() {
    setInterval(function() {
      $('.btn2').trigger('click');
    }, 30000);
  }, 10000);

  setTimeout(function() {
    setInterval(function() {
      $('.btn3').trigger('click');
    }, 30000);
  }, 20000);

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

});
