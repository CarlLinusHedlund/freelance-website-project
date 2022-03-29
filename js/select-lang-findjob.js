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
const findJobMain = document.querySelector(".find-job-main")


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
    findJobMain.innerHTML = `<main class="find-job-main">
    <section class="hero-banner">
      <div class="inner">
        <div class="herobanner-text">
          <h1>Expand your possibilities</h1>
          <p>Find jobs from companies around the whole country!</p>
        </div>
        <div>
          <img
            src="/images/mockups/MacBookPro16.png"
            alt="picture of iPhone13"
            class="iphone-hero"
          />
        </div>
      </div>
    </section>
    <section class="find-work-container">
      <div class="inner">
        <div class="find-work-info">
          <h2>Searching for jobs done easily</h2>
          <p>Easily filter through the jobs that suit you</p>
          <p class="desktop-text">
          Get easy in touch with companies who needs your talent
          </p>
          <p class="desktop-text">
            Easy hiring and seamless payment between client and talent          
          </p>
        </div>
        <div class="example-ui-area">
          <div class="categories-toggle-container">
            <div class="categories-toggle">
              Html <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="categories-toggle">
              CSS <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="categories-toggle">
              JS <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <p class="mobile-text">
            Get easy in touch with companies who needs your talent
          </p>
          <div class="job-card-container">
            <div class="title-and-like">
              <p>Looking for senior frontend-developer</p>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div class="company-and-sallary">
              <div>Google</div>
              <div class="sallary">350kr<span>pr/t</span></div>
            </div>
            <div class="job-card-buttons-container">
              <div class="job-buttons">Read More</div>
              <div class="job-buttons">Read More</div>
            </div>
          </div>
          <div class="messages-mockup">
            <p class="mobile-text">
               Get easy in touch with companies who needs your talent
            </p>
            <div class="talent-message-container">
              <div class="profile-thumbnail talent-profile"></div>
              <div class="message-box talent-message">Hey, hire me!😎</div>
            </div>
            <div class="client-message-container">
              <div class="profile-thumbnail client-profile"></div>
              <div class="message-box client-message">Okey bro!💵</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sell-your-service-section">
      <div class="inner">
        <div class="sell-your-service-text">
          <h2>Sell your services</h2>
          <div class="seller-info">
            <p>Get discovered quickly by potential customers</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>link easily up to your portfolio</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>Set your own competitive price</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
        </div>
        <div class="profile-cards">
          <div class="profile-card card1">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>I design your website</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
          <div class="profile-card card2">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>I design your website</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
          <div class="profile-card card3">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>I design your website</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="show-product-card-section">
      <div class="inner">
        <div class="market-your-service-text">
          <h2>Reach easy out to costumers</h2>
          <div class="seller-info">
            <p>Get discovered quickly by potential customers</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>link easily up to your portfolio</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>Set your own competitive price</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
        </div>
        <div class="profile-card-with-product">
          <div class="product-pic">
            <img src="/images/logos/Influunt_white.svg" alt="" />
          </div>
          <div class="profile-card product-card">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail product-talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>Let me create your timeless logo</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="beta-tester">
      <div class="inner">
      <h3 class="betatester-hero-text">Become our<span>Betatester</span></h3>
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
  </main>`

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
    findJobMain.innerHTML = `<main class="find-job-main">
    <section class="hero-banner">
      <div class="inner">
        <div class="herobanner-text">
          <h1>Utvid Dine Muligheter</h1>
          <p>Finn jobber fra bedrifter i hele landet!</p>
        </div>
        <div>
          <img
            src="/images/mockups/MacBookPro16.png"
            alt="picture of iPhone13"
            class="iphone-hero"
          />
        </div>
      </div>
    </section>
    <section class="find-work-container">
      <div class="inner">
        <div class="find-work-info">
          <h2>Jobbsøking gjort enkelt</h2>
          <p>Filtrer enkelt gjennom jobbene som passser deg</p>
          <p class="desktop-text">
            Kom enkelt i kontakt med bredrifter som trenger ditt talent
          </p>
          <p class="desktop-text">
            Enkel ansettelse og sømløs betaling mellom klient og talent
          </p>
        </div>
        <div class="example-ui-area">
          <div class="categories-toggle-container">
            <div class="categories-toggle">
              Html <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="categories-toggle">
              CSS <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="categories-toggle">
              JS <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <p class="mobile-text">
            Kom enkelt i kontakt med bredrifter som trenger ditt talent
          </p>
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
          <div class="messages-mockup">
            <p class="mobile-text">
              Enkel ansettelse og sømløs betaling mellom klient og talent
            </p>
            <div class="talent-message-container">
              <div class="profile-thumbnail talent-profile"></div>
              <div class="message-box talent-message">Hey, hire me!😎</div>
            </div>
            <div class="client-message-container">
              <div class="profile-thumbnail client-profile"></div>
              <div class="message-box client-message">Okey bro!💵</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sell-your-service-section">
      <div class="inner">
        <div class="sell-your-service-text">
          <h2>Selg din tjeneste</h2>
          <div class="seller-info">
            <p>Bli oppdaget raskt av poteniselle kunder</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>link enkelt opp til din portefølje</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>Sett din egen konkuransedyktige pris</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
        </div>
        <div class="profile-cards">
          <div class="profile-card card1">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>Jeg designer din nettside</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
          <div class="profile-card card2">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>Jeg designer din nettside</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
          <div class="profile-card card3">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>Jeg designer din nettside</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="show-product-card-section">
      <div class="inner">
        <div class="market-your-service-text">
          <h2>Nå enkelt ut til kunder</h2>
          <div class="seller-info">
            <p>Bli oppdaget raskt av poteniselle kunder</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>link enkelt opp til din portefølje</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="seller-info">
            <p>Sett din egen konkuransedyktige pris</p>
            <i class="fa-regular fa-circle-check"></i>
          </div>
        </div>
        <div class="profile-card-with-product">
          <div class="product-pic">
            <img src="/images/logos/Influunt_white.svg" alt="" />
          </div>
          <div class="profile-card product-card">
            <div class="profile-card-top-row">
              <div class="picture-name-container">
                <div class="profile-thumbnail product-talent-profile"></div>
                <div class="name-username-container">
                  <span>Mats Fjeldstad</span>
                  <span>@mædmatz</span>
                </div>
              </div>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>La meg lage din tidløse logo</p>
            <div class="bottom-row">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                4,9
              </div>
              <span>fra 10 000 kr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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