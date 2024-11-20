const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
