$('.carousel-slider').slick({
  arrows: false,
  centerMode: false,
  infinite: true,
  slidesToShow: 1,
  //speed: 500,
  dots: true,  
  cssEase: 'linear',
  fade: true, 
});

$('.catalog-card__slider').slick({
  arrows: false,
  dots: true,
  fade: true, 
  cssEase: 'linear',
  //autoplay: true,
  //autoplaySpeed: 5000,
});

$('.catalog-card__bookmark').on('click', function name(params) {
  $(this).toggleClass('catalog-card__bookmark--active');
})

$('.catalog-card__cart').on('click', function name(params) {
  $(this).toggleClass('catalog-card__cart--active');
})
