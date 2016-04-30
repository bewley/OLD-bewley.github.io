setTimeout(
  function() 
  {
$(document).ready(function(){
        $(".navbar").fadeIn(2000);
});
}, 2000);

//jQuery to collapse the navbar on scroll
var header_height = $('.navbar').height();
var intro_height = $('.intro-section').height();
var offset_val = intro_height + header_height;
console.log(header_height);
console.log(intro_height);
console.log(offset_val);
    
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("navbar-transparent");
        $(".navbar-brand").addClass("nav-brand-smaller");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("navbar-transparent");
        $(".navbar-brand").removeClass("nav-brand-smaller");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// fade out arrow & intro
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".intro-section .col-lg-12").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });
