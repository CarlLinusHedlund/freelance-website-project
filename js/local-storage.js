const en_button = document.getElementById('en'),
no_button = document.getElementById('no');
const nav_links = document.querySelector('.nav-link1');
const globe = document.querySelector('.globe-container');
const langToggle = document.getElementById('språk-velger');
const globeText = document.querySelector('.globe-text');
const langContainer = document.querySelector('.lang-container');
let lang_mode = localStorage.getItem('lang');



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


 


// function myFunction() {
    //     document.querySelector("globe-container").classList.toggle("show");
    //   }
    
    
    // window.onclick = function(e){
    //     if (!e.target.matches(langToggle)){
    //         const langToggle = document.getElementById('språk-velger');
    //        if(langToggle.classList.contains('show')) {
    //             langToggle.classList.remove('show')
    //         }
    //     }
    // }


