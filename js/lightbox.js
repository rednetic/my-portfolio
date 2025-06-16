document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.clickable-image');
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImg = overlay.querySelector('img');
  const closeBtn = document.getElementById('lightbox-close');

  function closeOverlay() {
      overlay.classList.add('active');
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active');
        overlayImg.src = '';
      document.body.classList.remove('no-scroll');
      overlay.classList.remove('closing');
    }, 150); // Optional: for a fade-out effect
  }

  images.forEach(img => {
    img.addEventListener('click', function () {
      overlayImg.src = this.src;
        overlay.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target === closeBtn) {
      closeOverlay();
    }
  });

  closeBtn.addEventListener('click', closeOverlay);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeOverlay();
    }
  });
});
// Placeholder for custom JS
