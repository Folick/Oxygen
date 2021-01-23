window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
// function testWebP(callback) {
//   let webP = new Image();
//   webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//   };
//   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// } 
// testWebP(function (support) {
//   if (support == true) {
//     document.querySelector('body').classList.add('webp');
//   } else {
//     document.querySelector('body').classList.add('no-webp');
//   }
// }); 
$(function () {
  $('.header__menu-btn').on('click', function () {
    $('.header__menu-list').slideToggle();
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $('.toggles button').click(function () {
    var get_id = this.id;
    var get_current = $('.portfolio__row-images .' + get_id);
    $('.column-images').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.column-images').show(500);
  });
  $(" button").click(function (e) {
    e.preventDefault();
    $(".btn").removeClass(' active');
    $(this).addClass(' active');
  });
  $('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
      animatedValue: 0
    }).animate({
      animatedValue: per
    }, {
      duration: 1000,
      step: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
  $('.slider').slick({
    autoplay: 3333,
    dots: true,
    nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/icons.svg#next" alt="Slider Arrow Next"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/icons.svg#prev" alt="Slider Arrow Prev"></button>',
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }]
  });
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000)
    return false;
  });
});