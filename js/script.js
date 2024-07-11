document.addEventListener('DOMContentLoaded', function () {
  const phoneLink = document.getElementById('phone-link');
  const phoneImage = document.getElementById('phone-img');

  phoneLink.addEventListener('mouseenter', function () {
    phoneImage.classList.add('sepia-50');
  });

  phoneLink.addEventListener('mouseleave', function () {
    phoneImage.classList.remove('sepia-50');
  });

  phoneLink.addEventListener('mousedown', function () {
    phoneImage.classList.add('sepia-100');
  });

  phoneLink.addEventListener('mouseup', function () {
    phoneImage.classList.remove('sepia-100');
  });
});