$(function(){
    'use strict';
    // ========================================================
    // Slick slider start
    // ========================================================
      $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });
    // ========================================================
    // Slick slider end
    // ========================================================

    
    // ========================================================
    // Venobox start
    // ========================================================
       $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: '#e23e38',
        closeColor: '#e23e38',
       });
    // ========================================================
    // Venobox end
    // ========================================================


    // ========================================================
    // Venobox gallery part start
    // ========================================================
    $(document).ready(function(){
      $('.venobox').venobox(); 
    });
    // ========================================================
    // Venobox gallery part end
    // ========================================================


    // ========================================================
    // Testimonial slider start
    // ========================================================
    $('.test_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,

      responsive: [
        {
          breakpoint: 991.68,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    
  // ========================================================
  // Testimonial slider end
  // ========================================================
    

  // ========================================================
  // Counter up start
  // ========================================================
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // ========================================================
  // Counter up end
  // ========================================================
  

    // ========================================================
    // Client logo slider start
    // ========================================================

    $('.client_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
      prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
      nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',

      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 576.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    });
  // ========================================================
  // Client logo slider end
  // ========================================================


  // ========================================================
  // Scroll top button start
  // ========================================================

    $('.scroll_btn').on('click',function(){
      $('html, body').animate({
        scrollTop: 0,
      }, 2000);
    });

    $(window).on('scroll', function(){
      var top = $(this).scrollTop();
      if (top > 342){
        $('.scroll_btn').fadeIn();
      }
      else{
        $('.scroll_btn').fadeOut();
      }
    });

  // ========================================================
  // Scroll top button end
  // ========================================================

});