$(document).ready(function() {

  $('.fa-bars').click(function() {
     if ($('.navigation-container').find('ul').css('display') == 'none') {
       $('.navigation-container').find('ul').css('display', 'flex');
     } else if ($('.navigation-container').find('ul').css('display') == 'flex') {
       $('.navigation-container').find('ul').css('display', 'none');
     }
  });

});
