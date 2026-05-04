document.addEventListener('DOMContentLoaded', function () {
  var toast = document.createElement('div');
  toast.id = 'cart-toast';
  document.body.appendChild(toast);

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      toast.classList.remove('visible');
    }, 2600);
  }

  document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('✓  Zum Warenkorb hinzugefügt');
    });
  });

  document.querySelectorAll('.order-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      showToast('✓  Bestellung aufgegeben');
      form.reset();
    });
  });
});
