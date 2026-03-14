(function() {
  var root = document.documentElement;
  var storageKey = 'oceanbrown-theme';
  var toggle = document.getElementById('theme-toggle');
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme) {
    var next = theme === 'dark' ? 'dark' : 'paper';
    var isDark = next === 'dark';

    root.setAttribute('data-theme', next);

    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.textContent = isDark ? 'Theme: dark' : 'Theme: light';
    }

    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#0d1420' : '#ebe5da');
    }
  }

  setTheme(localStorage.getItem(storageKey) || root.getAttribute('data-theme') || 'paper');

  if (toggle) {
    toggle.addEventListener('click', function() {
      var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'paper' : 'dark';
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    });
  }
})();
