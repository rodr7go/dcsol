(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: $('#mainNav').height()
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogo.png');
            $(".navbar-toggler i").css('font-size', '1.5em');
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogoWhite.png');
            $(".navbar-toggler i").css('font-size', '2em');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('ul.timeline>li').addClass('lightSpeedIn animated');
        }
    });


    // backgrounds to slider
    $('.carousel-item').each( function(index, element) {
        element = $(element);
        var bgPos = element.attr('data-bg-pos');
        var bg = element.attr('data-bg');

        element.css('background-image', 'url("'+bg+'")');
        
        if (bgPos !== undefined) {
            element.css('background-position', bgPos);
        }
    });


})(jQuery); // End of use strict
