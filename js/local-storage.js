const en_button = document.getElementById('en'),
no_button = document.getElementById('no');
const nav_links = document.querySelector('.nav-link1');
const nav_link2 = document.querySelector('.nav-link2')
const nav_link3 = document.querySelector('.nav-link3')
const nav_link4 = document.querySelector('.nav-link4')
const globe = document.querySelector('.globe-container');
const langToggle = document.getElementById('språk-velger');
const globeText = document.querySelector('.globe-text');
const langContainer = document.querySelector('.lang-container');
let lang_mode = localStorage.getItem('lang');
const contactPage = document.querySelector(".contact-body")
const contactMain = document.querySelector(".contact-container")




langToggle.onclick = function openLang (){
    langContainer.classList.toggle('hide');
    
}



function myFunction() {
    document.querySelector(".lang-container").classList.toggle("show");
  }

const enableEnMode = () => {
  en_button.classList.add('selected_lang');
  no_button.classList.remove('selected_lang')
  localStorage.setItem('lang', 'en');
  contactMain.innerHTML = `<section class="contact-container">
    <div class="inner">
      <div class="contact-form-container">
        <div class="contact-form-header">
          <h1 class="m0">How can we help you?</h1>
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
  nav_links.innerHTML = "Become a Betatester";
  globeText.innerHTML = "EN";
  console.log(nav_links)  
};

const enableNoMode = () => {
    globeText.innerHTML = "NO"
    nav_links.innerHTML = "Bli en Betatester";

    no_button.classList.add('selected_lang')
    en_button.classList.remove('selected_lang')
    localStorage.setItem('lang', 'no')
    contactMain.innerHTML = `<section class="contact-container">
    <div class="inner">
      <div class="contact-form-container">
        <div class="contact-form-header">
          <h1 class="m0">Hvordan kan vi helpe deg?</h1>
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
  </section>`
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

    // window.onclick = function(e){
    //     if (!e.target.matches(".globe")){
    //         const langContainer = document.getElementById('langContainer');
    //        if(!langContainer.classList.contains('hide')) {
    //             langContainer.classList.add('hide')
    //         }
    //     }
    // }

    window.onmouseup = function closeLangBo(event) {
        if (
          event.target !== langContainer &&
          event.target.parentNode !==  langContainer
        ) {
          langContainer.classList.add('hide');
        }
      };


