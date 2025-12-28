const theme = document.querySelector('.theme');

const themeToggle = () => {
    document.body.classList.toggle('theme_toggle');
}

theme.addEventListener('click', themeToggle);