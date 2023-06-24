window.addEventListener("DOMContentLoaded", (event) => {
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    itemSelectText: '',
  });

  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      name: 'Ошибка',
      mail: 'Ошибка'
    },
  });

  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    currentClass: '.swiper-pagination-current',
    totalClass: '.swiper-pagination-total',
    spaceBetween: 30,
    speed: 500,
    loop: false,
  });
});

