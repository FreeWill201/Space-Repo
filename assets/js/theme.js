var themeSwitchBtnEl = document.getElementById('switch-btn');
var themeSwitchLinkEl = document.getElementById('theme-switcher');
var themeStyle = localStorage.getItem('theme');

if (themeStyle === 'dark'|| themeStyle === null) {
    themeSwitchLinkEl.href = './assets/css/dark-theme.css' 
    themeSwitchBtnEl.textContent = 'Light Theme';
}else {
    themeSwitchLinkEl.href = './assets/css/light-theme.css'
    themeSwitchBtnEl.textContent = 'Dark Theme';
}

function changeTheme() {
    themeStyle = localStorage.getItem('theme');
    if (themeStyle === 'dark'||themeStyle === null) {
        themeSwitchLinkEl.href = './assets/css/light-theme.css';
        localStorage.setItem('theme', 'light');
        themeSwitchBtnEl.textContent = 'Dark Theme';
    }
    else if (themeStyle === 'light') {
        themeSwitchLinkEl.href = './assets/css/dark-theme.css';
        localStorage.setItem('theme', 'dark');
        themeSwitchBtnEl.textContent = 'Light Theme';
    }
};
themeSwitchBtnEl.addEventListener('click',changeTheme);