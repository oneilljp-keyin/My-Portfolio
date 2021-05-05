let css = document.querySelector("#css-mode");
let btn = document.querySelector("#mode-switch");
let logo = document.querySelector("#short-logo")

let currentTheme = localStorage.getItem("theme");

function setMode() {
    if (currentTheme == "light") {
        css.setAttribute("href", "styles-light.css");
        logo.setAttribute("src", "images/jonsd_black_logo_image.png");
        btn.innerHTML = "Dark Mode";
    } else if (currentTheme == "dark") {
        css.setAttribute("href", "styles-dark.css");
        logo.setAttribute("src", "images/jonsd_white_logo_image.png");
        btn.innerHTML = "Light Mode";
    }
}

function changeMode() {
    if (css.href.search("styles-light") == -1) {
        css.setAttribute("href", "styles-light.css");
        logo.setAttribute("src", "images/jonsd_black_logo_image.png");
        localStorage.setItem("theme", "light");
        btn.innerHTML = "Dark Mode";
    } else if (css.href.search("styles-dark") == -1) {
        css.setAttribute("href", "styles-dark.css");
        logo.setAttribute("src", "images/jonsd_white_logo_image.png");
        localStorage.setItem("theme", "dark");
        btn.innerHTML = "Light Mode";
    }
}
    
window.addEventListener("load", setMode);
document.querySelector("#mode-switch").addEventListener("click", changeMode);
