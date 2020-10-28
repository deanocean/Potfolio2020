let scrollAmt = 0;
let x = 0;
let y = 0;

$('.js_zoomImage').click(function (e) {
    
    $('.zoomBox').toggleClass('active');

    let imgData = $(this).find('img').attr('src');
    $('.zoomBox .content img').attr('src', imgData);

    x = parseInt(e.clientX)
    y = parseInt(e.clientY)
    
    cursorPos(x, y, scrollAmt)

    $('.zoomBox').scroll(function(){
        scrollAmt = parseInt($(this)[0].scrollTop);
        // console.log("this", $(this))
        cursorPos(x, y, scrollAmt)
    })

    $(window).mousemove(function (e) {
        x = parseInt(e.clientX)
        y = parseInt(e.clientY)

        cursorPos(x, y, scrollAmt)
    })

})

function cursorPos(x, y, scrollAmt){
    $('.far.fa-times-circle').css({
        'left': x+'px',
        'top': y+scrollAmt+'px'
    });
}

$('.zoomBox').click(function () {
    $('.zoomBox').toggleClass('active');
})

$('.hamburger').click(function () {
    $('nav').toggleClass('open');
    $('.hamburger').toggleClass('open');
})