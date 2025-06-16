document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.clickable-image');
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImg = overlay.querySelector('img');
  const closeBtn = document.getElementById('lightbox-close');

  function closeOverlay() {
    overlay.style.display = 'flex';
    overlay.classList.add('closing');
    setTimeout(() => {
      overlay.style.display = 'none';
      overlayImg.src = '';
      document.body.classList.remove('no-scroll');
      overlay.classList.remove('closing');
    }, 150); // Optional: for a fade-out effect
  }

  images.forEach(img => {
    img.addEventListener('click', function () {
      overlayImg.src = this.src;
      overlay.style.display = 'flex';
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
