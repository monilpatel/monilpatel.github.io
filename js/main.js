$(document).ready(function () {
    $('#toggle').click(function () {
        //        $(this).toggleClass('active');
        $('#fullnav').addClass('open');
        //$('.navbar').toggleClass('off');

    });


    $('#close_menu').click(function () {
        $('#fullnav').removeClass('open');
    })

    $('#menu-portfolio').click(function () {
        $('#fullnav').removeClass('open');
    })
     $('#menu-home').click(function () {
        $('#fullnav').removeClass('open');
    })
         
});

     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-98603630-1', 'auto');
  ga('send', 'pageview');

  



//AOS.init();

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 768) {
        $(".navbar").removeClass("off");
        $("#fullnav").removeClass("open");

    }
});

//
//// jQuery for page scrolling feature - requires jQuery Easing plugin
//$('.page-scroll a').bind('click', function (event) {
//    var $anchor = $(this);
//    $('html, body').stop().animate({
//        scrollTop: ($($anchor.attr('href')).offset().top - 50)
//    }, 1250, 'easeInOutExpo');
//    event.preventDefault();
//});