function setBackground() {
  const container = document.querySelector('.container');
  const isDark = document.documentElement.classList.contains('dark');

  container.style.backgroundImage = isDark
    ? "url('assets/bg-login-dark.jpg')"
    : "url('assets/bg-login-light.jpg')";
}

window.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('theme-checkbox');

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    checkbox.checked = true;
  }

  setBackground();

  checkbox.addEventListener('change', () => {
    const isDark = checkbox.checked;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setBackground(); // ✅ Update background dynamically
  });
});

window.addEventListener('load', () => {
  document.documentElement.classList.remove('theme-preload');
});

