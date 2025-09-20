document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.classList.toggle('is-open');
        });
    }

    const themeSwitch = document.getElementById('checkbox');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            if (currentTheme === 'light') {
                document.body.classList.add('light-mode');
                themeSwitch.checked = true;
            }
        }
    }
});