const button = document.getElementById('spoiler-button');
let isChecked = true;

button.addEventListener('click', () => {
  isChecked = !isChecked;

  button.src = isChecked
    ? 'assets/images/sys/spoiler-unchecked.png'
    : 'assets/images/sys/spoiler-checked.png';

  const spoilers = document.querySelectorAll('.spoiler-text');
  spoilers.forEach(el => {
    if (isChecked) {
      el.classList.remove('revealed');
      el.classList.add('blurred');
    } else {
      el.classList.remove('blurred');
      el.classList.add('revealed');
    }
  });
});
