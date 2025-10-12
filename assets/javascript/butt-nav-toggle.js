const toggleButton = document.getElementById('nav-toggle');
const sidebar = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});