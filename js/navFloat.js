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


  $('.rightNav').hover(function() {
    var temp = document.getElementsByClassName('rightNav')[0].style.backgroundColor;
    $(this).css({"background-color": "white","color":"black"});
  }, function() {
    $(this).css({"background-color": "","color":"white"});
  });

  $('#leftNav').hover(function() {
    var temp = document.getElementsByClassName('rightNav')[0].style.backgroundColor;
    $(this).css({"background-color": "white","color":"black"});
  }, function() {
    $(this).css({"background-color": "","color":"white"});
  });

  $('.sheetMP3right').hover(function() {
    $(this).css({"background-color":"white","color":"black"});
  }, function() {
    $(this).css({"background-color":"","color":"white"});
  });

  $('.sheetMP3left').hover(function() {
    $(this).css({"background-color":"white","color":"black"});
  }, function() {
    $(this).css({"background-color":"","color":"white"});
  });


    // $('li').hover(function() {

    //     $(this).animate({
    //       backgroundColor: 'white',
    //       color: 'black'
    //     }, 1000);
    // });

});

// $(function(){
//   $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

//   // If you want to keep full screen on window resize
//   $(window).resize(function(){
//     $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
//   });
// });


