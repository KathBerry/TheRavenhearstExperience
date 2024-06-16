document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const buttons = document.querySelectorAll('.btn');

    // Check the localStorage for the theme setting
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        buttons.forEach(btn => btn.classList.add('dark-mode'));
        themeToggle.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        buttons.forEach(btn => btn.classList.remove('dark-mode'));
        themeToggle.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
