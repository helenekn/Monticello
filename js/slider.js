$(document).ready(function () {
   $(".slider").slick({
      dots: true,
      arrows: false,

      autoplay: true,
      autoplaySpeed: 4500,
      speed: 1500,
      slidesToShow: 1,
      infinite: true,
      swipe: true,
      fade: true,
   });
});

$(document).ready(function () {
   $(".slider-news").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      dots: true,
      autoplay: true,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
});
