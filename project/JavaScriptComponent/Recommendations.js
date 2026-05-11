(function renderRecommendations() {
  const wrapper = document.getElementById('recWrapper');
  if (!wrapper) return;

  recommendations.forEach(function (rec) {
    const stars = '★'.repeat(rec.stars);

    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML =
      '<div class="rec-card">' +
        '<div class="stars">' + stars + '</div>' +
        '<h3>' + rec.title + '</h3>' +
        '<p>' + rec.text + '</p>' +
        '<div class="rec-author">' +
          '<img src="' + rec.img + '" alt="' + rec.name + '"/>' +
          '<div class="rec-author-info">' +
            '<strong>' + rec.name + '</strong>' +
            '<span>' + rec.role + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    wrapper.appendChild(slide);
  });

  new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    keyboard: { enabled: true },
    grabCursor: true,
    breakpoints: {
      640:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
})();
