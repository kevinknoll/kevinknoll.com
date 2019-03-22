(function () {
  var intro = document.getElementById('intro');

  if (!intro || !intro.classList) {
    return;
  }

  window.addEventListener('scroll', function (e) {
    if (window.scrollY > 100) {
      intro.classList.add('animate');
    } else {
      intro.classList.remove('animate');
    }
  }, false);
})();
