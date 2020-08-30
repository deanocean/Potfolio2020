"use strict";

var scrollAmt = 0;
var x = 0;
var y = 0;
$('.js_zoomImage').click(function (e) {
  $('.zoomBox').toggleClass('active');
  var imgData = $(this).find('img').attr('src');
  $('.zoomBox .content img').attr('src', imgData);
  cursorPos(x, y, scrollAmt);
  $('.zoomBox').scroll(function () {
    scrollAmt = parseInt($(this)[0].scrollTop); // console.log("this", $(this))

    cursorPos(x, y, scrollAmt);
  });
  $(window).mousemove(function (e) {
    x = parseInt(e.clientX);
    y = parseInt(e.clientY);
    cursorPos(x, y, scrollAmt);
  });
});

function cursorPos(x, y, scrollAmt) {
  $('.far.fa-times-circle').css({
    'left': x + 'px',
    'top': y + scrollAmt + 'px'
  });
}

$('.zoomBox').click(function () {
  $('.zoomBox').toggleClass('active');
});
$('.hamburger').click(function () {
  $('nav').toggleClass('open');
  $('.hamburger').toggleClass('open');
});
//# sourceMappingURL=all.js.map
