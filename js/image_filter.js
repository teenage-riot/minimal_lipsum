function addSepiaFilter(link, image) {
  link.addEventListener('mouseenter', function () {
    image.classList.add('sepia-50');
  });

  link.addEventListener('mouseleave', function () {
    image.classList.remove('sepia-50');
  });

  link.addEventListener('mousedown', function () {
    image.classList.add('sepia-100');
  });

  link.addEventListener('mouseup', function () {
    image.classList.remove('sepia-100');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const phoneLink = document.getElementById('phone-link');
  const phoneImage = document.getElementById('phone-img');
  const emailLink = document.getElementById('email-link');
  const emailImage = document.getElementById('email-img');

  addSepiaFilter(phoneLink, phoneImage);
  addSepiaFilter(emailLink, emailImage);
});