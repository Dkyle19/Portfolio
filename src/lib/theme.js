const KEY = 'portfolio-theme';

export function getSavedTheme() {
  try {
    return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('light', theme === 'light');
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // Storage may be unavailable (private mode); the toggle still works for this visit
  }
}
