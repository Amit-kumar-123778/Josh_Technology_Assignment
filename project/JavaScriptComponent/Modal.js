(function initModal() {
  const overlay    = document.getElementById('modalOverlay');
  const hireMeBtn  = document.getElementById('hireMeBtn');
  const closeBtn   = document.getElementById('modalCloseBtn');
  const cancelBtn  = document.getElementById('modalCancelBtn');

  if (!overlay) return;

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hireMeBtn) {
    hireMeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();