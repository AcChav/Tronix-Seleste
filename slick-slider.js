$(document).ready(function(){
  $('.slick__slider').slick({
    slidesToShow: 4,
    prevArrow: false, 
    nextArrow: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Add click event listeners to your existing buttons
  $('.prev').on('click', function() {
    $('.slick__slider').slick('slickPrev');
  });

  $('.next').on('click', function() {
    $('.slick__slider').slick('slickNext');
  });
});