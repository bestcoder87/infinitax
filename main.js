$(document).ready(function() {
    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    // Close mobile menu when clicking a link
    $('.nav-menu a').on('click', function() {
        $('.mobile-menu-toggle').removeClass('active');
        $('.nav-menu').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    // Back to Top Button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Smooth scrolling for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });

    // Scroll animations
    function animateOnScroll() {
        $('[data-animate]').each(function() {
            var elementPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollPosition = $(window).scrollTop();

            if (elementPosition < scrollPosition + windowHeight - 100) {
                $(this).addClass('visible');
            }
        });
    }

    // Run on page load
    animateOnScroll();

    // Run on scroll
    $(window).on('scroll', function() {
        animateOnScroll();
    });

    // Testimonial Slider
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
    }

    // Newsletter form submission
    $('.newsletter-form').on('submit', function(e) {
        e.preventDefault();
        var email = $(this).find('input[type="email"]').val();

        // Simple validation
        if (email) {
            // In a real implementation, you would send this to your server
            alert('Thank you for subscribing!');
            $(this).find('input[type="email"]').val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Add animation classes to elements when they come into view
    $(window).on('load', function() {
        $('.hero-content').addClass('fade-in-up');
        $('.hero-image').addClass('fade-in-up');
        $('.trust-item').each(function(index) {
            $(this).addClass('fade-in-up').css('animation-delay', index * 0.2 + 's');
        });
    });
});
