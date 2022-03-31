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
const betatesterMain = document.querySelector(".betatester-main")


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
    document.querySelector(".lang-container").classList.toggle("hide");
}

const enableEnMode = () => {
    en_button.classList.add('selected_lang');
    no_button.classList.remove('selected_lang')
    localStorage.setItem('lang', 'en');
    betatesterMain.innerHTML = `<main class="betatester-main"> 
    <div class="hero">
      <div class="inner">
        <div class="hero-info">
          <div>
            <h1>Become a <br /><span>Betatester</span></h1>
            <p class="hero-text">
              Be one of the first to try out Scandinavias next big job platform.
            </p>
          </div>
          <a class="hero-button-link" href="#email-list"
            ><button class="hero-button">Send you email to get on the list</button></a
          >
        </div>
        <div class="jobless-beta-container">
          <div class="jobless-beta-logo">
            <div class="hero-logo"><span>job</span>less.</div>
            <div class="beta">beta</div>
          </div>
        </div>
      </div>
    </div>
    <section class="make-your-profile">
      <div class="inner">
        <div class="make-profile-info">
          <h2>
            Set up easily
            <div>Your Profil</div>
          </h2>
          <p>
          Easily set up your jobless profile and view your future clients
          some of your work. Set up products and sell from day 1
          </p>
        </div>
        <div class="profile-example">
          <img
            src="/Images/mockups/jobless-beta-mobile.png"
            alt=""
            class="jobless-beta-mobile-version"
          />
          <img
            src="/Images/mockups/jobless-beta-desktop.png"
            alt=""
            class="jobless-beta-desktop-version"
          />
        </div>
      </div>
    </section>
    <section class="earn-beta">
      <div class="inner">
        <div class="earn-money-info">
          <h2>
            Use your talent,
            <div>Earn Money</div>
          </h2>
          <p>
          Sell your products and make money! Keep track of the economy and
          keep track of your financial development
          </p>
        </div>
        <div class="chart-example">
          <img
            src="/Images/mockups/chart-beta.svg"
            alt=""
            class="chart-beta"
          />
        </div>
      </div>
    </section>
    <section class="find-bugs-beta">
      <div class="inner">
        <div class="find-bugs-info">
          <h2>
            Help us
            <div>to find bugs</div>
          </h2>
          <p>
            Help us to find bugs, and get <b>Plus+ subscription</b> when we are releasing Jobless. 1.0
          </p>
        </div>
        <div class="bugs-button-container">
          <div class="bugs-button">
            <i class="fa-solid fa-bug"></i> <span>report errors</span>
          </div>
        </div>
      </div>
    </section>
    <section class="email-list" id="email-list"></section>
    <div class="beta-tester">
      <div class="inner">
      <h3 class="betatester-hero-text">Become our <span>Betatester</span></h3>
      <form class="email-submit" method="post" data-netlify="true" name="beta-tester">
        <input
          class="email-betatester"
          type="text"
          placeholder="Your email"
        />
        <button class="submit-betatester" type="submit">Submit</button>
      </div>
    </div>
    </div>
    </main>`;
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
    //Every loop through on nav-links
    for (let i = 0; i < nav_linkOne.length; i++) {
        nav_linkOne[i].innerHTML = "Bli en Betatester";
    }
    for (let i = 0; i < nav_linkTwo.length; i++) {
      nav_linkTwo[i].innerHTML = "Find Job";
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
    betatesterMain.innerHTML = `<main class="betatester-main"> 
    <div class="hero">
      <div class="inner">
        <div class="hero-info">
          <div>
            <h1>Bli En <br /><span>Betatester</span></h1>
            <p class="hero-text">
              Bli en av de første til få prøve Scandinavias neste store
              jobbplatform
            </p>
          </div>
          <a class="hero-button-link" href="#email-list"
            ><button class="hero-button">Sett deg opp på liste</button></a
          >
        </div>
        <div class="jobless-beta-container">
          <div class="jobless-beta-logo">
            <div class="hero-logo"><span>job</span>less.</div>
            <div class="beta">beta</div>
          </div>
        </div>
      </div>
    </div>
    <section class="make-your-profile">
      <div class="inner">
        <div class="make-profile-info">
          <h2>
            Sett Enkelt Opp
            <div>Din Profil</div>
          </h2>
          <p>
            Sett enkelt opp din jobess. profil og vis dine fremtidige klienter
            noe av ditt arbeid. Sett opp produkter og selg fra dag 1
          </p>
        </div>
        <div class="profile-example">
          <img
            src="/Images/mockups/jobless-beta-mobile.png"
            alt=""
            class="jobless-beta-mobile-version"
          />
          <img
            src="/Images/mockups/jobless-beta-desktop.png"
            alt=""
            class="jobless-beta-desktop-version"
          />
        </div>
      </div>
    </section>
    <section class="earn-beta">
      <div class="inner">
        <div class="earn-money-info">
          <h2>
            Bruk ditt talent,
            <div>Tjen Penger</div>
          </h2>
          <p>
            Selg dine produkter og tjen penger ! Hold styr på økonomien og
            følg med på din økonomiskeutvikling
          </p>
        </div>
        <div class="chart-example">
          <img
            src="/Images/mockups/chart-beta.svg"
            alt=""
            class="chart-beta"
          />
        </div>
      </div>
    </section>
    <section class="find-bugs-beta">
      <div class="inner">
        <div class="find-bugs-info">
          <h2>
            Hjelp oss med
            <div>å finne bugs</div>
          </h2>
          <p>
            Hjelp oss med å finne bug, og få <b>Pluss+ medlemskap</b> når vi
            slipper jobless. 1.0
          </p>
        </div>
        <div class="bugs-button-container">
          <div class="bugs-button">
            <i class="fa-solid fa-bug"></i> <span>rapportere feil</span>
          </div>
        </div>
      </div>
    </section>
    <section class="email-list" id="email-list"></section>
    <div class="beta-tester">
      <div class="inner">
      <h3 class="betatester-hero-text">Bli vår fremtidige <span>Betatester</span></h3>
      <form class="email-submit" method="post" data-netlify="true" name="beta-tester">
        <input
          class="email-betatester"
          type="text"
          placeholder="Your email"
        />
        <button class="submit-betatester" type="submit">submit</button>
      </div>
    </div>
    </div>
    </main>`;
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