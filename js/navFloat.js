$(document).ready(function () { 
    $("#text").hide(0).fadeIn(2000);
    $("#textList").hide(0).fadeIn(2000);
    $("#textList1").hide(0).fadeIn(2000);
    $('.img').hide(0).fadeIn(2000);

  var top = $('#navigation').offset().top - parseFloat($('#navigation').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#navigation').addClass('fixed');
    } else {
      // otherwise remove it
      $('#navigation').removeClass('fixed');
    }
  });


  // $('li').hover(function() {
  //   $(this).css({"background-color":"white","color":"black"});
  // }, function() {
  //   $(this).css({"background-color":"#1a1a1a","color":"white"});
  // });

    $('li').hover(function() {

        $(this).animate({
          backgroundColor: 'white',
          color: 'black'
        }, 1000);
    });

});


