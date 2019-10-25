import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["the club is not the place to be so the bar is where you'll find me with my friends doing shots scanning the room and catching nods", "WELCOME TO THE BAR"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
const loadDynamicBannerText2 = () => {
  new Typed('#banner-typed-text2', {
    strings: ["They say money cant buy your happiness, but i´ve got a receipt from the bar telling a whole different story", "WELCOME TO THE BAR"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText2 };
const loadDynamicBannerText3 = () => {
  new Typed('#banner-typed-text3', {
    strings: ["Lets get drunk and tell each other everything were affraid to say sober.", "WELCOME TO THE BAR"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText3 };
