const toggleButton = document.getElementById('toggleButton');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add('dark-mode');
    container.classList.add('dark-mode');
    h1.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    container.classList.remove('dark-mode');
    h1.classList.remove('dark-mode');
    toggleButton.classList.remove('dark-mode');
  }
});
