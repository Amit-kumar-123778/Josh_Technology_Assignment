(function initNavbar() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const TRACKED_SECTIONS = ['home', 'projects', 'recommendations', 'contact'];
  const OFFSET = 100; // px from top before a section is considered "active"

  function updateActiveLink() {
    let current = '';

    TRACKED_SECTIONS.forEach(function (id) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - OFFSET) {
        current = id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);

  updateActiveLink();
})();