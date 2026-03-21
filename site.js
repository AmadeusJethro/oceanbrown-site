(function() {
  var dialog = document.getElementById('email-dialog');
  var triggers = document.querySelectorAll('#email-trigger, [data-contact-trigger]');
  var index;

  function hasDialogSupport() {
    return !!dialog && typeof dialog.showModal === 'function';
  }

  function openDialog() {
    if (hasDialogSupport() && !dialog.open) {
      dialog.showModal();
    }
  }

  function openFallback(trigger) {
    var href = trigger.getAttribute('data-contact-href');
    if (href) {
      window.location.href = href;
    }
  }

  for (index = 0; index < triggers.length; index += 1) {
    triggers[index].addEventListener('click', function(event) {
      if (hasDialogSupport()) {
        event.preventDefault();
        openDialog();
        return;
      }

      openFallback(this);
    });
  }

  if (dialog) {
    dialog.addEventListener('click', function(event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }
})();
