function setupPasswordToggle(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  let isVisible = false;

  if (input && icon) {
    icon.addEventListener('click', () => {
      isVisible = !isVisible;
      input.type = isVisible ? 'text' : 'password';
      icon.src = isVisible ? 'assets/eye-closed.png' : 'assets/eye.png';
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setupPasswordToggle('password', 'toggle-password');
  setupPasswordToggle('confirm-password', 'toggle-confirm-password');
});