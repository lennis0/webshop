(function () {
  function getCart() {
    try { return JSON.parse(localStorage.getItem('kf_cart') || '[]'); }
    catch (e) { return []; }
  }
  function saveCart(cart) { localStorage.setItem('kf_cart', JSON.stringify(cart)); }

  function addItem(name, price) {
    var cart = getCart();
    var item = cart.find(function (i) { return i.name === name; });
    if (item) { item.qty++; } else { cart.push({ name: name, price: price, qty: 1 }); }
    saveCart(cart);
  }
  function removeItem(name) {
    saveCart(getCart().filter(function (i) { return i.name !== name; }));
  }
  function totalCount() {
    return getCart().reduce(function (s, i) { return s + i.qty; }, 0);
  }

  var toast, badge, drawer, overlay;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.remove('visible'); }, 2600);
  }

  function updateBadge() {
    var n = totalCount();
    badge.textContent = n;
    badge.style.display = n > 0 ? 'flex' : 'none';
  }

  function renderItems() {
    var cart = getCart();
    var list = drawer.querySelector('.cart-items');
    var empty = drawer.querySelector('.cart-empty');
    var footer = drawer.querySelector('.cart-footer');
    list.innerHTML = '';
    if (cart.length === 0) {
      empty.style.display = 'block';
      footer.style.display = 'none';
      return;
    }
    empty.style.display = 'none';
    footer.style.display = 'flex';
    var sum = 0;
    cart.forEach(function (item) {
      var m = item.price.match(/[\d.]+/);
      if (m) sum += parseFloat(m[0]) * item.qty;
      var el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML =
        '<div class="cart-item-info">' +
          '<span class="cart-item-name">' + item.name + '</span>' +
          '<span class="cart-item-price">' + item.price + '</span>' +
        '</div>' +
        '<div class="cart-item-controls">' +
          '<span class="cart-item-qty">×' + item.qty + '</span>' +
          '<button class="cart-item-remove" data-name="' + item.name + '">✕</button>' +
        '</div>';
      list.appendChild(el);
    });
    list.querySelectorAll('.cart-item-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeItem(this.dataset.name);
        updateBadge();
        renderItems();
      });
    });
    drawer.querySelector('.cart-total-price').textContent = 'CHF ' + sum.toFixed(2);
  }

  function openDrawer() { drawer.classList.add('open'); overlay.classList.add('visible'); renderItems(); }
  function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('visible'); }

  document.addEventListener('DOMContentLoaded', function () {
    // Toast
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    document.body.appendChild(toast);

    // Overlay
    overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.addEventListener('click', closeDrawer);
    document.body.appendChild(overlay);

    // Drawer
    drawer = document.createElement('div');
    drawer.id = 'cart-drawer';
    drawer.innerHTML =
      '<div class="cart-drawer-header">' +
        '<span>Warenkorb</span>' +
        '<button class="cart-close-btn">✕</button>' +
      '</div>' +
      '<div class="cart-items"></div>' +
      '<p class="cart-empty">Dein Warenkorb ist leer.</p>' +
      '<div class="cart-footer">' +
        '<div class="cart-total"><span>Total</span><span class="cart-total-price"></span></div>' +
        '<button class="btn-primary cart-checkout-btn">Zur Kasse →</button>' +
      '</div>';
    document.body.appendChild(drawer);
    drawer.querySelector('.cart-close-btn').addEventListener('click', closeDrawer);
    drawer.querySelector('.cart-checkout-btn').addEventListener('click', function () {
      saveCart([]);
      updateBadge();
      closeDrawer();
      showToast('✓  Bestellung aufgegeben');
    });

    // Cart icon badge
    badge = document.querySelector('.cart-badge');
    var cartBtn = document.querySelector('.cart-icon-btn');
    if (cartBtn) { cartBtn.addEventListener('click', openDrawer); }
    updateBadge();

    // Add-to-cart buttons
    document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var h1 = document.querySelector('.detail-info h1') || document.querySelector('h1');
        var name = h1 ? h1.textContent.trim() : 'Produkt';
        var priceEl = document.querySelector('.detail-price');
        var price = priceEl ? priceEl.textContent.trim() : '';
        addItem(name, price);
        updateBadge();
        showToast('✓  Zum Warenkorb hinzugefügt');
      });
    });

    // Order form
    document.querySelectorAll('.order-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        showToast('✓  Bestellung aufgegeben');
        form.reset();
      });
    });

    // Contact / newsletter forms
    document.querySelectorAll('.contact-form, .newsletter-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        showToast('✓  Nachricht gesendet');
        form.reset();
      });
    });
  });
})();
