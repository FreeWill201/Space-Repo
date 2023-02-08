var themeSwitchBtnEl = document.getElementById('switch-btn');
var themeSwitchLinkEl = document.getElementById('theme-switcher');

var themeStyle = localStorage.getItem('theme');

if (themeStyle === 'dark'|| themeStyle === null) {
    themeSwitchLinkEl.href = './assets/css/dark-theme.css' 
    themeSwitchBtnEl.textContent = 'Dark';
}else {
    themeSwitchLinkEl.href = './assets/css/light-theme.css'
    themeSwitchBtnEl.textContent = 'Light';
}

function changeTheme() {
    themeStyle = localStorage.getItem('theme');
    if (themeStyle === 'dark'||themeStyle === null) {
        themeSwitchLinkEl.href = './assets/css/light-theme.css';
        themeSwitchBtnEl.textContent = 'Light';
        localStorage.setItem('theme', 'light');
        console.log("theme changed to light");
    }
    else if (themeStyle === 'light') {
        themeSwitchLinkEl.href = './assets/css/dark-theme.css';
        themeSwitchBtnEl.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    }
};


themeSwitchBtnEl.addEventListener('click',changeTheme);