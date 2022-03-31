const en_button = document.getElementById('en'),
    no_button = document.getElementById('no');

// NAVIGATION LINKS IN THE HEADER
const nav_linkOne = document.querySelectorAll('.nav-link1');
const nav_linkTwo = document.querySelectorAll('.nav-link2')
const nav_linkThree = document.querySelectorAll('.nav-link3')
const nav_linkFour = document.querySelectorAll('.nav-link4')

// SAME 1
const globe = document.querySelector('.globe-container');

// SAME 1 This is the lang toggle BTN
const langToggle = document.getElementById('språk-velger');

// LANG TEXT
const globeText = document.querySelectorAll('.globe-text');

const langContainer = document.querySelector('.lang-container');
let lang_mode = localStorage.getItem('lang');
const indexMain = document.querySelector(".index-main")


document.addEventListener("DOMContentLoaded", function (event) {
    //we ready baby
    if (lang_mode === 'no') {
        enableNoMode();
    } else {
        enableEnMode();
    }
});
langToggle.onclick = function openLang() {
    langContainer.classList.toggle('hide');
}

function myFunction() {
    document.querySelector(".lang-container").classList.toggle("show");
}

const enableEnMode = () => {
    en_button.classList.add('selected_lang');
    no_button.classList.remove('selected_lang')
    localStorage.setItem('lang', 'en');
    for (let i = 0; i < nav_linkOne.length; i++) {
      nav_linkOne[i].innerHTML = "Become a Betatester";
      }
    for (let i = 0; i < nav_linkTwo.length; i++) {
      nav_linkTwo[i].innerHTML = "Find Job";
    }
    for (let i = 0; i < nav_linkThree.length; i++){
      nav_linkThree[i].innerHTML = "Find Talent"
    }
    for (let i = 0; i < nav_linkFour.length; i++){
      nav_linkFour[i].innerHTML = "Contact Us"
    }
    for (let i = 0; i < globeText.length; i++) {
        globeText[i].innerHTML = "EN";
    }
    // nav_linksOne.innerHTML = "Become a Betatester";
    // nav_linksOne.innerText = "TEST";
    // globeText.innerHTML = "EN";
    for (let i = 0; i < globeText.length; i++) {
        globeText[i].innerHTML = "EN";
    }
};

const enableNoMode = () => {
    //Every loop through on nav-links & innerHTML changes
    for (let i = 0; i < nav_linkOne.length; i++) {
        nav_linkOne[i].innerHTML = "Bli en Betatester";
    }
    for (let i = 0; i < nav_linkThree.length; i++){
      nav_linkThree[i].innerHTML = "Finn Talent"
    }
    for (let i = 0; i < nav_linkFour.length; i++){
      nav_linkFour[i].innerHTML = "Kontakt Oss"
    }
    for (let i = 0; i < globeText.length; i++) {
        globeText[i].innerHTML = "NO";
    }

    //Inner HTML changes
    

    //local storage add & add/remove class
    no_button.classList.add('selected_lang')
    en_button.classList.remove('selected_lang')
    localStorage.setItem('lang', 'no')
    
}

en_button.onclick = function () {
    enableEnMode();
};

no_button.onclick = function () {
    enableNoMode();
};


window.onmouseup = function closeLangBo(event) {
    if (
        event.target !== langContainer &&
        event.target.parentNode !== langContainer
    ) {
        langContainer.classList.add('hide');
    }
};