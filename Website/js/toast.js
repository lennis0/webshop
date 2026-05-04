document.addEventListener('DOMContentLoaded', function () {
  var toast = document.createElement('div');
  toast.id = 'cart-toast';
  toast.textContent = '✓  Zum Warenkorb hinzugefügt';
  document.body.appendChild(toast);

  document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      toast.classList.add('visible');
      clearTimeout(toast._t);
      toast._t = setTimeout(function () {
        toast.classList.remove('visible');
      }, 2600);
    });
  });
});
