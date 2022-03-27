// const body = document.querySelector('body');
// const darkModeToggle = document.querySelector('.dark-mode-button');
// let darkMode = localStorage.getItem('darkMode');
// let lang = localStorage.getItem('lang');

// // disables darkmode, adds value to localStorage
// const enableDarkMode = () => {
//   body.classList.add('dark');
//   localStorage.setItem('darkMode', 'enabled');
//   localStorage.setItem('lang', 'en');
// };

// // disables darkmode, adds value to localStorage
// const disableDarkMode = () => {
//   body.classList.remove('dark');
//   localStorage.setItem('darkMode', null);
//   localStorage.setItem('lang', 'no');
// };

// // enabels darkmode on reload if toggled
// if (darkMode === 'enabled') {
//   enableDarkMode();
// }

// // toggles darkmode
// darkModeToggle.onclick = function toggleDarkMode() {
//   darkMode = localStorage.getItem('darkMode');
//   if (darkMode !== 'enabled') {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// };

const en_button = document.getElementById('en'),
no_button = document.getElementById('no');

const nav_links = document.querySelector('.nav-link1')

const globe = document.querySelector('.globe-container')
const langToggle = document.getElementById('språk-velger')
const globeText = document.querySelector('.globe-text')
const langContainer = document.querySelector('.lang-container')
let lang_mode = localStorage.getItem('lang')


// disables darkmode, adds value to localStorage


langToggle.onclick = function openLang (){
    langContainer.style.height = "40px";
}

const enableEnMode = () => {
    globeText.innerHTML = "EN";
    nav_links.innerHTML = "Become a Betatester";
  en_button.classList.add('selected_lang');
  no_button.classList.remove('selected_lang')
  localStorage.setItem('lang', 'en');
};

const enableNoMode = () => {
    globeText.innerHTML = "NO"
    nav_links.innerHTML = "Bli en Betatester";
    no_button.classList.add('selected_lang')
    en_button.classList.remove('selected_lang')
    localStorage.setItem('lang', 'no')
}

if (lang_mode === 'no') {
    enableNoMode();
   } else {
       enableEnMode()
   };



en_button.onclick = function langSelectedEn (){
    enableEnMode();
};

no_button.onclick = function langSelectedNo (){
    enableNoMode();
};


 



