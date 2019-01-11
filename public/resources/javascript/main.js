$(document).ready(function() {

  $('.btn1').click(function() {
    $('.rev1').animate({'left': '15%'});
    $('.rev2,.rev3').animate({'left': '100%'});
    $('.btn1,.btn2,.btn3').removeClass('active inactive');
    $('.btn1').addClass('active');
    $('.btn2,.btn3').addClass('inactive');
  });

  $('.btn2').click(function() {
    $('.rev1').animate({'left': '-100%'});
    $('.rev2').animate({'left': '15%'});
    $('.rev3').animate({'left': '100%'});
    $('.btn1,.btn2,.btn3').removeClass('active inactive');
    $('.btn1,.btn3').addClass('inactive');
    $('.btn2').addClass('active');
  });

  $('.btn3').click(function() {
    $('.rev1,.rev2').animate({'left': '-100%'});
    $('.rev3').animate({'left': '15%'});
    $('.btn1,.btn2,.btn3').removeClass('active inactive');
    $('.btn1,.btn2').addClass('inactive');
    $('.btn3').addClass('active');
  });

  $('.btn1').trigger('click');

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

});
