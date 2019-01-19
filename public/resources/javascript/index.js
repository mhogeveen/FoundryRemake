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

  // Modal functionality
  // When the cross is clicked close the modal section
  $('.modal-close').click(function() {
    $('#modal-section').css('display','none');
    $('.modal-content').removeClass('img1 img2 img3 img4 img5 img6');
    $("a[href^='https://www.instagram.com']").attr('href', 'tmp-link');
  });

  // Display modal section when clicking on a instagram section image
  $('.img1').click(function() {
    $('#modal-section').css('display','flex');
    $('.modal-content').addClass('img1');
    $("a[href='tmp-link']").attr('href', 'https://www.instagram.com');
    return false;
  });

  $('.img2').click(function() {
    $('#modal-section').css('display','flex');
    $('.modal-content').addClass('img2');
    $("a[href='tmp-link']").attr('href', 'https://www.instagram.com');
    return false;
  });

  $('.img3').click(function() {
    $('#modal-section').css('display','flex');
    $('.modal-content').addClass('img3');
    $("a[href='tmp-link']").attr('href', 'https://www.instagram.com');
    return false;
  });

  $('.img4').click(function() {
    $('#modal-section').css('display','flex');
    $('.modal-content').addClass('img4');
    $("a[href='tmp-link']").attr('href', 'https://www.instagram.com');
    return false;
  });

  $('.img5').click(function() {
    $('#modal-section').css('display','flex');
    $('.modal-content').addClass('img5');
    $("a[href='tmp-link']").attr('href', 'https://www.instagram.com');
    return false;
  });

  $('.img6').click(function() {
    $('#modal-section').css('display','flex');
    $('.modal-content').addClass('img6');
    $("a[href='tmp-link']").attr('href', 'https://www.instagram.com');
    return false;
  });

});
