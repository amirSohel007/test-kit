//slider
$(".owl-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});

//toogle menu class
$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("nav ul").slideToggle();
});
