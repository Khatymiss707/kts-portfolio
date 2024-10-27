const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 20000,
    disableOnInteraction: false,
  },

    navigation: {
      nextEl: '.swiper-button-next',
    },
  });