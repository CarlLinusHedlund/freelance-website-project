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
const findTalentMain = document.querySelector(".find-talent-main")


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
    //Inner HTML changes main
    findTalentMain.innerHTML = `<main class="find-talent-main">
    <div class="talent-hero-banner">
      <div class="inner">
        <h1 class="talent-hero-text">
          Find your Freelancer<br />
          on
          <span class="hero-jobless">job<span>less</span></span>
        </h1>
        <img
          class="profilbilde-arne"
          src="./Images/img/profilbilde-arne.png"
          alt="find-talent"
        />
      </div>
    </div>
    <div class="portefoljer">
      <div class="inner">
        <div class="portefolje-info">
          <h2>Portfolio's</h2>
          <span>Filter and review the portfolio of freelancers.</span>
          <br />
          <span
            >Browse their work and read profile reviews from the past
            work.
          </span>
        </div>
        <div class="portefolje-eksempel sh">
          <div class="portefolje-img"></div>
          <div class="eksempel-navn">
            <h3>Philipe Eduaro</h3>
            <span>@philipeee</span>
          </div>
          <div class="eksempel-work">
            <h3>Front-end Developer</h3>
            <div class="score">
              <div class="star-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span><b>4.9</b></span>
              </div>
              <span class="annmeldelser">(500+ Ratings)</span>
            </div>
          </div>
          <div class="ekstra-info">
            <div class="portefolje-btn">Kontakt meg</div>
            <div class="portefolje-sted">
              <div class="sted-pin">
                <i class="fa-solid fa-location-dot"></i>
                Fra
              </div>
              <div class="sted">Oslo, Norway</div>
            </div>
            <div class="medlem">
              <div class="siden">
                <i class="fa-solid fa-user"></i>
                Member since
              </div>
              <div class="medlems-år">June 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pick-freelancer">
      <div class="inner">
        <div class="pick-info">
          <h2>Choose Freelancer</h2>
          <span
            >Get in touch easily with freelancers who can help you
            Solve your problem</span
          >
        </div>
        <div class="samtale-mockup">
          <div class="samtale-company">
            <div class="company-logo"></div>
            <div class="samtale-tekst">
            Hi! We at google are looking for a back-end dev the next three
            the months! i can see you match what we are looking for! Wanna come for a
            interview?
            </div>
          </div>
          <div class="samtale-person">
            <div class="samtale-tekst-person">
            Hi! Yes, this sounds exciting!
            </div>
            <div class="person-logo"></div>
          </div>
          <div class="samtale-company">
            <div class="company-logo"></div>
            <div class="samtale-tekst">
            Super! Sends you link to video interview during the day!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kontrakt">
      <div class="inner">
        <div class="kontrakt-img">
          <img src="./Images/img/kontrakt.png" alt="contract" />
        </div>
        <div class="kontrakt-info">
          <h2>Sign contracts easy and fast</h2>
          <span
            >Easily set up digital contracts with your counterparty. Sign everything
            with email and sms verification!</span
          >
        </div>
      </div>
    </div>
    <div class="publiser-jobb">
      <div class="inner">
        <div class="publiser">
          <div class="publiser-info">
            <h2><b>Publish Job</b></h2>
            <span
              >Post work for your company at jobless and leave it
              Scandinavian market of freelancers compete for you</span
            >
          </div>
          <div class="publiser-steg">
            <div class="steg-1">
              <i class="fa-regular fa-circle-check"></i>
              Get easy in touch with talents.
            </div>
            <div class="steg-2">
              <i class="fa-regular fa-circle-check"></i>
              Review portfolios that have submitted a job application.
            </div>
            <div class="steg-3">
              <i class="fa-regular fa-circle-check"></i>
              Choose a candidate / candidates that best matches your project.
            </div>
          </div>
        </div>

        <div class="job-card-container">
          <div class="title-and-like">
            <p>Searching senior frontend-developer</p>
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="company-and-sallary">
            <div>Google</div>
            <div class="sallary">350kr <span>pr/t</span></div>
          </div>
          <div class="job-card-buttons-container">
            <div class="job-buttons">Les mer</div>
            <div class="job-buttons">Les mer</div>
          </div>
        </div>
      </div>
    </div>
    <div class="beta-tester">
      <div class="inner">
      <h3 class="betatester-hero-text">Become a<span>Betatester</span></h3>
      <form class="email-submit" method="post" data-netlify="true" name="beta-tester">
        <input
          class="email-betatester"
          type="text"
          placeholder="Your email"
        />
        <button class="submit-betatester" type="submit">submit</button>
      </div>
      <a class="hjelp-oss" href="./beta-tester.html">Join and help us</a>
    </div>
  </main>`;

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

    //Inner HTML changes main
    findTalentMain.innerHTML = `<main class="find-talent-main">
    <div class="talent-hero-banner">
      <div class="inner">
        <h1 class="talent-hero-text">
          Finn din freelancer <br />
          hos
          <span class="hero-jobless">job<span>less</span></span>
        </h1>
        <img
          class="profilbilde-arne"
          src="./Images/img/profilbilde-arne.png"
          alt="find-talent"
        />
      </div>
    </div>
    <div class="portefoljer">
      <div class="inner">
        <div class="portefolje-info">
          <h2>Porteføljer</h2>
          <span>Filterer og se gjennom portoføljer til freelancere.</span>
          <br />
          <span
            >Bla gjennom deres arbeid og lese profilanmeldelser fra tidligere
            arbeid.
          </span>
        </div>
        <div class="portefolje-eksempel sh">
          <div class="portefolje-img"></div>
          <div class="eksempel-navn">
            <h3>Philipe Eduaro</h3>
            <span>@philipeee</span>
          </div>
          <div class="eksempel-work">
            <h3>Front-end utvikler</h3>
            <div class="score">
              <div class="star-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span><b>4.9</b></span>
              </div>
              <span class="annmeldelser">(500+ anmeldelser)</span>
            </div>
          </div>
          <div class="ekstra-info">
            <div class="portefolje-btn">Kontakt meg</div>
            <div class="portefolje-sted">
              <div class="sted-pin">
                <i class="fa-solid fa-location-dot"></i>
                Fra
              </div>
              <div class="sted">Oslo, Norge</div>
            </div>
            <div class="medlem">
              <div class="siden">
                <i class="fa-solid fa-user"></i>
                Medlem siden
              </div>
              <div class="medlems-år">Juni 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pick-freelancer">
      <div class="inner">
        <div class="pick-info">
          <h2>Velg Freelancer</h2>
          <span
            >Kom enkelt i kontakt med freelancere som kan hjelpe deg med å
            løse ditt problem</span
          >
        </div>
        <div class="samtale-mockup">
          <div class="samtale-company">
            <div class="company-logo"></div>
            <div class="samtale-tekst">
              Hei! Vi i google er på jakt etter en back-end dev de neste tre
              månedene! Ser du matcher det vi ser etter! Kunne du tenke deg et
              intervju?
            </div>
          </div>
          <div class="samtale-person">
            <div class="samtale-tekst-person">
              Hei! Ja, dette høres spennende ut!
            </div>
            <div class="person-logo"></div>
          </div>
          <div class="samtale-company">
            <div class="company-logo"></div>
            <div class="samtale-tekst">
              Supert! Sender deg link til videointervju iløpet av dagen!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kontrakt">
      <div class="inner">
        <div class="kontrakt-img">
          <img src="./Images/img/kontrakt.png" alt="contract" />
        </div>
        <div class="kontrakt-info">
          <h2>Signer kontrakter enkelt</h2>
          <span
            >Sett enkelt opp digitale kontrakter med din motpart. Signer alt
            med email-, og sms verifisering!</span
          >
        </div>
      </div>
    </div>
    <div class="publiser-jobb">
      <div class="inner">
        <div class="publiser">
          <div class="publiser-info">
            <h2><b>Publiser Jobb</b></h2>
            <span
              >Legg ut arbeid til din bedrift hos jobless og la det
              skandiaviske markedet av freelancere konkurrere om deg</span
            >
          </div>
          <div class="publiser-steg">
            <div class="steg-1">
              <i class="fa-regular fa-circle-check"></i>
              Kom lett i kontakt med talenter.
            </div>
            <div class="steg-2">
              <i class="fa-regular fa-circle-check"></i>
              Se gjennom portoføljer som har sendt jobbsøknad.
            </div>
            <div class="steg-3">
              <i class="fa-regular fa-circle-check"></i>
              Velg kandidat/kandidater som matcher best til ditt prosjekt.
            </div>
          </div>
        </div>

        <div class="job-card-container">
          <div class="title-and-like">
            <p>Søker senior frontend- developer</p>
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="company-and-sallary">
            <div>Google</div>
            <div class="sallary">350kr <span>pr/t</span></div>
          </div>
          <div class="job-card-buttons-container">
            <div class="job-buttons">Les mer</div>
            <div class="job-buttons">Les mer</div>
          </div>
        </div>
      </div>
    </div>
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
      <a class="hjelp-oss" href="./beta-tester.html">Bli med å hjelp oss</a>
    </div>
  </main>`

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