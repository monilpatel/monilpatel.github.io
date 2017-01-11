$(document).ready(function () {
    $('#toggle').click(function () {
//        $(this).toggleClass('active');
        $('#fullnav').addClass('open');
        //$('.navbar').toggleClass('off');

    });


    $('#close_menu').click(function () {
        $('#fullnav').removeClass('open');
    })
});


//AOS.init();

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 768) {
        $(".navbar").removeClass("off");
        $("#fullnav").removeClass("open");

    }
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll a').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});