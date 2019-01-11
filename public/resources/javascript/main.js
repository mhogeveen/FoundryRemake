$(document).ready(function() {

  $('.btn1').click(function() {
    $('.rev1').animate({'left': '15%'});
    $('.rev2').animate({'left': '100%'});
    $('.rev3').animate({'left': '100%'});
    $('.btn1').removeClass('active inactive');
    $('.btn1').addClass('active');
    $('.btn2').removeClass('active inactive');
    $('.btn2').addClass('inactive');
    $('.btn3').removeClass('active inactive');
    $('.btn3').addClass('inactive');
  });

  $('.btn2').click(function() {
    $('.rev1').animate({'left': '-100%'});
    $('.rev2').animate({'left': '15%'});
    $('.rev3').animate({'left': '100%'});
    $('.btn1').removeClass('active inactive');
    $('.btn1').addClass('inactive');
    $('.btn2').removeClass('active inactive');
    $('.btn2').addClass('active');
    $('.btn3').removeClass('active inactive');
    $('.btn3').addClass('inactive');
  });

  $('.btn3').click(function() {
    $('.rev1').animate({'left': '-100%'});
    $('.rev2').animate({'left': '-100%'});
    $('.rev3').animate({'left': '15%'});
    $('.btn1').removeClass('active inactive');
    $('.btn1').addClass('inactive');
    $('.btn2').removeClass('active inactive');
    $('.btn2').addClass('inactive');
    $('.btn3').removeClass('active inactive');
    $('.btn3').addClass('active');
  });

});
