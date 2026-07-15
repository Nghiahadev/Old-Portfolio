document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.open-popup').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const popup = this.closest('.portfolio_item').querySelector('.popup-overlay');
      popup.style.display = 'flex';

      // Lock background scroll
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelectorAll('.close-popup').forEach(btn => {
    btn.addEventListener('click', function () {
      const overlay = this.closest('.popup-overlay');
      overlay.style.display = 'none';

      // Restore background scroll
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-overlay')) {
      e.target.style.display = 'none';

      // Restore background scroll
      document.body.style.overflow = '';
    }
  });
});
