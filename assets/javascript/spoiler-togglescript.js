const button = document.getElementById('spoiler-button');
button.addEventListener('click', () => {
const spoilers = document.querySelectorAll('.spoiler-text');
spoilers.forEach(el => el.classList.toggle('revealed'));
});