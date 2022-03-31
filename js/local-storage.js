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
const contactMain = document.querySelector(".contact-container")


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

// function myFunction() {
//     document.querySelector(".lang-container").classList.toggle("show");
// }

const enableEnMode = () => {
    en_button.classList.add('selected_lang');
    no_button.classList.remove('selected_lang')
    localStorage.setItem('lang', 'en');
    contactMain.innerHTML = `<section class="contact-container">
      <div class="inner">
        <div class="contact-form-container">
          <div class="contact-form-header">
            <h1 class="m0">Need help?</h1>
            <p class="m0 s-font">
              If you wish to get in touch, you can use our contact scheme down below<br />
              Or contact us by phone.
            </p>
          </div>
          <div class="contact-form-wrapper">
            <form
              netlify
              name="contact"
              method="post"
              data-netlify="true"
              onsubmit="SubmitEvent"
              data-netlify-honeypot="bot-field"
            >
              <div class="input-container">
                <input class="hide" name="bot-field" />
                <div class="input-name-container">
                  <label class="m0 s-font white-text" for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div class="input-email-container">
                  <label for="inputEmail" class="m0 s-font white-text"
                    >E-mail</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="inputEmail"
                    class="form-control"
                  />
                </div>
                <div class="input-message-container">
                  <label for="messageInput" class="white-text s-font"
                    >Your Message</label
                  >
                  <textarea
                    class="message-input"
                    name="message"
                    id="messageInput"
                    rows="10"
                  ></textarea>
                </div>
                <button type="submit" class="submit-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div class="other-contact-container">
            <div class="other-contact white-text">
              <div class="jobless-phone">
                <i class="fa-solid fa-phone"></i>
                <p class="m0">+ 47 895 45 641</p>
              </div>
              <div class="jobless-mail">
                <i class="fa-solid fa-at"></i>
                <p class="m0">jobless@work.no</p>
              </div>
            </div>
            <div class="social-media-container">
              <a href=""><i class="fa-brands fa-facebook white-text"></i></a>
              <a href=""><i class="fa-brands fa-instagram white-text"></i></a>

              <a href=""><i class="fa-brands fa-github white-text"></i></a>
              <a href=""><i class="fa-brands fa-linkedin white-text"></i></a>
            </div>
          </div>
        </div>
        <div class="contact-img-container">
          <img
            data-value="8"
            id="greenBlob"
            class="green-blob blob2 blobJs"
            src="./Images/img/green-blob2.png"
            alt="green blob"
          />
          <div class="contact-img">
            <img
              data-value="2"
              src="./Images/img/monalisa-blob.png"
              alt="green blob"
              class="green-blob blobJs"
            />
          </div>
          <img
            data-value="7"
            id="greenBlob"
            class="green-blob blob1 blobJs"
            src="./Images/img/green-blob.png"
            alt="green blob blobJs"
          />
        </div>
      </div>
    </section>`;
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
      nav_linkTwo[i].innerHTML = "Bli en Betatester";
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
    contactMain.innerHTML = `<section class="contact-container">
    <div class="inner">
      <div class="contact-form-container">
        <div class="contact-form-header">
          <h1 class="m0">Hvordan kan vi hjelpe deg?</h1>
          <p class="m0 s-font">
            Om du ønsker å ta kontakt med oss, kan du bruke vårt
            kontaktskjema. <br />
            Eller kontakt oss på telefon.
          </p>
        </div>
        <div class="contact-form-wrapper">
          <form
            netlify
            name="contact"
            method="post"
            data-netlify="true"
            onsubmit="SubmitEvent"
            data-netlify-honeypot="bot-field"
          >
            <div class="input-container">
              <input class="hide" name="bot-field" />
              <div class="input-name-container">
                <label class="m0 s-font white-text" for="name">Navn</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div class="input-email-container">
                <label for="inputEmail" class="m0 s-font white-text"
                  >E-mail</label
                >
                <input
                  type="email"
                  name="email"
                  id="inputEmail"
                  class="form-control"
                />
              </div>
              <div class="input-message-container">
                <label for="messageInput" class="white-text s-font"
                  >Din Melding</label
                >
                <textarea
                  class="message-input"
                  name="message"
                  id="messageInput"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" class="submit-button">
                Send Melding
              </button>
            </div>
          </form>
        </div>
        <div class="other-contact-container">
          <div class="other-contact white-text">
            <div class="jobless-phone">
              <i class="fa-solid fa-phone"></i>
              <p class="m0">+47 895 45 641</p>
            </div>
            <div class="jobless-mail">
              <i class="fa-solid fa-at"></i>
              <p class="m0">jobless@work.no</p>
            </div>
          </div>
          <div class="social-media-container">
            <a href=""><i class="fa-brands fa-facebook white-text"></i></a>
            <a href=""><i class="fa-brands fa-instagram white-text"></i></a>

            <a href=""><i class="fa-brands fa-github white-text"></i></a>
            <a href=""><i class="fa-brands fa-linkedin white-text"></i></a>
          </div>
        </div>
      </div>
      <div class="contact-img-container">
        <img
          data-value="8"
          id="greenBlob"
          class="green-blob blob2 blobJs"
          src="./Images/img/green-blob2.png"
          alt="green blob"
        />
        <div class="contact-img">
          <img
            data-value="2"
            src="./Images/img/monalisa-blob.png"
            alt="green blob"
            class="green-blob blobJs"
          />
        </div>
        <img
          data-value="7"
          id="greenBlob"
          class="green-blob blob1 blobJs"
          src="./Images/img/green-blob.png"
          alt="green blob blobJs"
        />
      </div>
    </div>
    </section>`;
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


