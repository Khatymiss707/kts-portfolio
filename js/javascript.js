const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

    navigation: {
      nextEl: '.swiper-button-next',
    },
  });