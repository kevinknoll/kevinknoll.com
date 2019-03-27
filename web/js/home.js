(function () {
  var kev = document.querySelector('.kev');
  var k = document.querySelector('.k');
  var end = document.querySelector('.end');
  var dev = document.querySelector('.dev');

  function setup(selector, attr, value) {
    var els = document.querySelectorAll(selector);
    for (var i = 0, ii = els.length; i < ii; ++i) {
      els[i].setAttribute('data-lax-' + attr, value);
      els[i].setAttribute('data-lax-anchor', '#intro');
      els[i].classList.add('lax');
    }
  }

  setup('.fade', 'opacity', '0 1, 100 0');
  setup('.kev,.k', 'translate-y', '0 0, 100 50');
  setup('.k', 'opacity', '0 0, 50 1');
  setup('.k', 'translate-x', '0 0, 100 ' + ((kev.offsetLeft + kev.offsetWidth) - k.offsetLeft));
  setup('.dev', 'translate-x', '0 0, 100 5');
  setup('.end', 'translate-x', '0 0, 100 ' + (dev.offsetLeft - end.offsetLeft - 7));
  setup('.end', 'translate-y', '0 0, 100 ' + (dev.offsetTop - end.offsetTop));

  lax.setup();

  function updateLax() {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  }

  window.requestAnimationFrame(updateLax)
})();
