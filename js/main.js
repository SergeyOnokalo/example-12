$(function(){
  $('.slider__items').slick({
  dots: true,
  fade: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000
  });
});
$(function(){
  $('.products__slider-1').slick({
  // arrows:true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});
$(function(){
  $('.products__slider-2').slick({
  // arrows:true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});


