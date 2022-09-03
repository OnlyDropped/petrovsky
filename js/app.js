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

$('.buy-together__wrapper').slick({
  arrows: false,
  //cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  //cssEase: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  cssEase: 'ease-in-out',
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.svg" alt=""></button>'
})

$('.card-product__slider').slick({
  arrows: true,
  //cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  //cssEase: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  cssEase: 'ease-in-out',
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.svg" alt=""></button>'
})

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

$('.filter-sidebar__input').ionRangeSlider({
  onStart: function (data){
    $('.filter-sidebar__from-price').text(data.from);
    $('.filter-sidebar__to-price').text(data.to);
  },
  onChange: function (data) {
    $('.filter-sidebar__from-price').text(data.from);
    $('.filter-sidebar__to-price').text(data.to);
  },
})


