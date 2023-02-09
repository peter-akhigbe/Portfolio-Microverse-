const menuBtn = document.querySelector('#menuBtn');
const mobileNav = document.querySelector('#mobileNav');
const body = document.querySelector('body');
const closeBtn = document.querySelector('#closeBtn');
const mobileNavLinks = document.querySelector('.mobileNavLinks');
const seeProject1 = document.querySelector('.seeProject1');
const seeProject2 = document.querySelector('.seeProject2');
const seeProject3 = document.querySelector('.seeProject3');
const seeProject4 = document.querySelector('.seeProject4');

const seeProjectBtns = [seeProject1, seeProject2, seeProject3, seeProject4];

const popup = document.querySelector('.popup');

menuBtn.addEventListener('click', () => {
  mobileNav.style.height = '100vh';
  mobileNav.style.display = 'block';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileNav.style.height = '0px';
  body.style.overflow = 'visible';
});

mobileNavLinks.addEventListener('click', () => {
  mobileNav.style.height = '0px';
  body.style.overflow = 'visible';
});

const projects = [
  {
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'image/Snapshoot Portfolio.png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://peter-akhigbe.github.io/Portfolio-Microverse-/',
    source: 'https://github.com/peter-akhigbe/Portfolio-Microverse-',
  },
  {
    name: 'Multi-Post Stories',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'image/Snapshoot Portfolio(3).png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://peter-akhigbe.github.io/Portfolio-Microverse-/',
    source: 'https://github.com/peter-akhigbe/Portfolio-Microverse-',
  },
  {
    name: 'FACEBOOK 360',
    client: 'FACEBOOK',
    role: 'Full Stack',
    year: '2015',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: 'image/Snapshoot Portfolio(1).png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://peter-akhigbe.github.io/Portfolio-Microverse-/',
    source: 'https://github.com/peter-akhigbe/Portfolio-Microverse-',
  },
  {
    name: 'Uber Navigation',
    client: 'UBER',
    role: 'Lead DeveloperStack',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'image/Snapshoot Portfolio(2).png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://peter-akhigbe.github.io/Portfolio-Microverse-/',
    source: 'https://github.com/peter-akhigbe/Portfolio-Microverse-',
  },
];

for (let i = 0; i < seeProjectBtns.length; i += 1) {
  seeProjectBtns[i].addEventListener('click', () => {
    popup.style.display = 'flex';
    popup.innerHTML += `
    <div class="popup-child">
     <div class="popup-name-x">
     <h3 class="popup-h3">${projects[i].name}</h3>
     <span class="popup-x">X</span>
     </div>

     <ul class="popup-frame">
      <li class="popup-client">${projects[i].client}</li>
      <div class="popup-counter"></div>
      <li class="popup-role">${projects[i].role}</li>
      <div class="popup-counter"></div>
      <li class="popup-year">${projects[i].year}</li>
     </ul>

     <img class="popup-image" src="${projects[i].image}" alt="Tonic" />

     <p class="popup-para">${projects[i].para}</p>

     <ul class="popup-ul">
      <li class="popup-li">
      <p class="popup-p">${projects[i].technologies[0]}</p>
      </li>
      <li class="popup-li">
      <p class="popup-p">${projects[i].technologies[1]}</p>
      </li>
      <li class="popup-li">
      <p class="popup-p">${projects[i].technologies[2]}</p>
      </li>
     </ul>

     <div class="popup-line"></div>

     <div class="popup-button-container">
     <button class="see-live" type="button">
      <a href="${projects[i].live}"
        ><div>See Live</div>
        <img src="image/Icon.png" alt="image"
      /></a>
    </button>

    <button class="see-source" type="button">
      <a href="${projects[i].source}"
        ><div>See Source</div>
        <img src="image/Vector.png" alt="image"
      /></a>
    </button>
  </div>
</div>
    `;

    const popupX = document.querySelector('.popup-x');

    popupX.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
}
