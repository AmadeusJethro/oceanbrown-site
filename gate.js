(function() {
  var root = document.documentElement;
  var storageKey = 'oceanbrown-site-gate';
  var password = '6969';

  function isUnlocked() {
    return sessionStorage.getItem(storageKey) === password;
  }

  function unlock() {
    var main = document.getElementById('main-content');

    sessionStorage.setItem(storageKey, password);
    root.setAttribute('data-gate', 'open');

    var gate = document.querySelector('.site-gate');
    if (gate) {
      gate.remove();
    }

    if (main) {
      main.focus();
    }
  }

  if (isUnlocked()) {
    root.setAttribute('data-gate', 'open');
    return;
  }

  root.setAttribute('data-gate', 'locked');

  document.addEventListener('DOMContentLoaded', function() {
    var gate = document.createElement('div');
    gate.className = 'site-gate';
    gate.innerHTML = [
      '<form class="gate-panel" novalidate>',
      '  <p class="gate-title">Password required</p>',
      '  <label class="sr-only" for="site-password">Password</label>',
      '  <input class="gate-field" id="site-password" name="password" type="password" inputmode="numeric" autocomplete="current-password" required>',
      '  <button class="gate-submit" type="submit">Submit</button>',
      '  <p class="gate-hint">Hint: PC</p>',
      '</form>'
    ].join('');

    document.body.appendChild(gate);

    var form = gate.querySelector('form');
    var input = gate.querySelector('input');

    requestAnimationFrame(function() {
      input.focus();
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      if (input.value === password) {
        input.setAttribute('aria-invalid', 'false');
        form.classList.remove('is-invalid');
        unlock();
        return;
      }

      input.value = '';
      input.setAttribute('aria-invalid', 'true');
      form.classList.add('is-invalid');
      input.focus();
    });

    input.addEventListener('input', function() {
      if (form.classList.contains('is-invalid')) {
        form.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
      }
    });
  });
})();
