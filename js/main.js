// fixing of hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.a-links').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

// Create the mobile object with elements
const project = [
  { // card 1 details
    id: '1',
    cardTitle: 'TONIC',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    company: 'CANOPY',
    cardTitle2: 'TONIC',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    company2: 'CANOPY',
    no: 'd1',
    cardImage2: './assets/images/desktop1.png" alt="project1.png',
    role2: 'Back End Dev',
    cardImage: '<img class="card-image" src="./assets/images/project1.png" alt="project1.png"/>',
    skills2: ['HTML', 'CSS', 'Javascript'],
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
  },
  // card2 details
  {
    id: '2',
    cardTitle: 'TONIC',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    company: 'CANOPY',
    cardTitle2: 'Multi-Post Stories',
    description2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    company2: 'FACEBOOK',
    no: 'd2',
    cardImage2: './assets/images/desktop2.png" alt="project1.png',
    role2: 'Full Stack Dev',
    skills2: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    cardImage: '<img class="card-image" src="./assets/images/project2.png" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
  },
  // card3 Details
  {
    id: '3',
    cardTitle: 'TONIC',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    company: 'CANOPY',
    cardTitle2: 'Facebook 360',
    description2: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    company2: 'FACEBOOK',
    no: 'd3',
    cardImage2: './assets/images/desktop3.png" alt="project1.png',
    role2: 'Full Stack Dev',
    skills2: ['HTML', 'CSS', 'Ruby on rails', 'Javascript'],
    cardImage: '<img class="card-image" src="./assets/images/project3.png" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
  },
  // card4 Details
  {
    id: '4',
    cardTitle: 'TONIC',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    company: 'CANOPY',
    cardTitle2: 'Uber Navigation',
    description2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    company2: 'Uber',
    no: 'd4',
    cardImage2: './assets/images/desktop4.png" alt="project1.png',
    role2: 'Back End Dev',
    skills2: ['HTML', 'CSS', 'Ruby on rails', 'Javascript'],
    cardImage: '<img class="card-image" src="./assets/images/project4.png" alt="project4.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
  },
];

// Create the mobile modal object with elements
const modals = [
  { // card 1 details
    cardTitle: 'TONIC',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    company: 'CANOPY',
    cardTitle2: 'Tonic',
    no: 'd1',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and scrambled it 1960s with the relea',
    company2: 'CANOPY',
    cardImage2: './assets/images/desktop1.png" alt="project1.png"',
    role2: 'Front End Dev',
    skills2: ['HTML', 'CSS', 'Javascript'],
    cardImage: './assets/images/project1.png" alt="project1.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    id: '1',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
    sourceLink: 'https://github.com/mercy/portfolio',
    demoLink: 'https://mercymugambi.github.io/portfolio/',
  },
  // card2 details
  {
    cardTitle: 'TONIC',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    company: 'CANOPY',
    cardTitle2: 'Multi Post stories',
    no: 'd2',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and scrambled it 1960s with the relea',
    company2: 'Facebook',
    cardImage2: './assets/images/desktop2.png" alt="project2.png"',
    role2: 'Back End Dev',
    skills2: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    cardImage: './assets/images/project2.png" alt="project2.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    id: '2',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
    sourceLink: 'https://github.com/mercymugambi/portfolio',
    demoLink: 'https://mercymugambi.github.io/portfolio/',
  },
  // card3 Details
  {
    cardTitle: 'TONIC',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    company: 'CANOPY',
    cardTitle2: 'Facebook 360',
    no: 'd3',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and scrambled it 1960s with the relea',
    company2: 'facebook',
    cardImage2: './assets/images/desktop3.png" alt="project3.png"',
    role2: 'Back End Dev',
    skills2: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    cardImage: './assets/images/project3.png" alt="project3.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    id: '3',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
    sourceLink: 'https://github.com/mercymugambi/portfolio',
    demoLink: 'https://mercymugambi.github.io/portfolio/',
  },
  // card4 Details
  {
    cardTitle: 'TONIC',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    company: 'CANOPY',
    cardTitle2: 'Uber Navigation',
    no: 'd4',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and scrambled it 1960s with the relea',
    company2: 'Uber',
    cardImage2: './assets/images/desktop4.png" alt="project4.png"',
    role2: 'Back End Dev',
    skills2: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    cardImage: './assets/images/project4.png" alt="project4.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    id: '4',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2015',
    sourceLink: 'https://github.com/mercymugambi/portfolio',
    demoLink: 'https://mercymugambi.github.io/portfolio/',
  },
];

window.onload = function loader() {
  // Cards section for the mobile differs from desktop
  // query card section element to hold cards
  const mobileCardContainer = document.querySelector('.projects-section');
  function addMobileCard() {
    let mCard = '';
    project.forEach((cards) => {
      let skills = '';
      for (let i = 0; i < cards.skills.length; i += 1) {
        skills += `<li>${cards.skills[i]}</li>`;
      }
      mCard += `<div class="card" >
        ${cards.cardImage}
        <div class="tonic-area">
          <h2 class="cards-details">${cards.cardTitle}</h2>
          <div class="highlights">
            <span class="highlight-text">${cards.company}</span>
            ${cards.counter1}
            <span class="countertext">${cards.role}</span>
            ${cards.counter2}
            <span class="year">${cards.year}</span>
          </div>
          <article class="card-description">
            <p>
            ${cards.description}
            </p>
          </article>
          <ul class="skills">
          ${skills}
          </ul>
          <a href="#${cards.id}" class="popup" >See Project</a>
        </div>
      </div>`;
    });
    // id="popup-${cards.id}"

    mobileCardContainer.innerHTML = mCard;
  }

  // starts of the desktop cards
  const desktopContainer = document.querySelector('.projects-section-desktop');

  function addDesktopCard() {
    let dCard = '';
    project.forEach((cards, index) => {
      let skills2 = '';
      for (let i = 0; i < cards.skills2.length; i += 1) {
        skills2 += `<li>${cards.skills2[i]}</li>`;
      }

      if (index === 1 || index === 3) {
        dCard += `<div class="card project2">
        <img class="card-image" src="${cards.cardImage2}" alt="project1.png"/>'
      <div class="tonic-area">
        <h2 class="cards-details">${cards.cardTitle2}</h2>
        <div class="highlights">
          <span class="highlight-text">${cards.company2}</span>
          ${cards.counter1}
          <span class="countertext">${cards.role2}</span>
          ${cards.counter2}
          <span class="year">${cards.year}</span>
        </div>
        <article class="card-description">
          <p>
          ${cards.description2}
          </p>
        </article>
        <ul class="skills">
        ${skills2}
        </ul>
        <a href ="#${cards.no}" class="popup">See Project</a>
      </div>
    </div>`;
      } else {
        dCard += `<div class="card">
        <img class="card-image" src="${cards.cardImage2}" alt="project1.png"/>'
      <div class="tonic-area">
        <h2 class="cards-details">${cards.cardTitle2}</h2>
        <div class="highlights">
          <span class="highlight-text">${cards.company2}</span>
          ${cards.counter1}
          <span class="countertext">${cards.role2}</span>
          ${cards.counter2}
          <span class="year">${cards.year}</span>
        </div>
        <article class="card-description">
          <p>
          ${cards.description2}
          </p>
        </article>
        <ul class="skills">
        ${skills2}
        </ul>
        <a href="#${cards.no}" class="popup">See Project</a>
      </div>
    </div>`;
      }
    });
    desktopContainer.innerHTML = dCard;
  }

  const mobileModalContainer = document.querySelector('.mobile-popup-window');
  function addMobileModal() {
    let modalCard = '';
    modals.forEach((cards, index) => {
      let skills = '';
      for (let i = 0; i < cards.skills.length; i += 1) {
        skills += `<li>${cards.skills[i]}</li>`;
      }
      modalCard += `<div class="overlays" id="${index + 1}">
        <div class="modals" id="modal1"> 
            <h2 class="title">${cards.cardTitle}</h2>
            <a href="#" class="close-btn">&times;</a>
          <div class="highlights">
              <span class="highlight-text">${cards.company}</span>
              <img src="./assets/images/Counter.png" alt="Counter.png" />
              <span class="countertext">${cards.role}</span>
              <img src="./assets/images/Counter.png" alt="Counter.png" />
              <span class="year">${cards.year}</span>
          </div>
    
          <img class="card-image" src="${cards.cardImage}" alt="project1.png"/>
          <article class="card-description">
              <p>
              ${cards.description}
                </p>
          </article>
          <ul class="skills">
          ${skills}
          </ul>
          <div class="border"></div>
          <div class="modal-links">
            <a href="${cards.sourceLink}"><span class="see-link">See live</span>
            <img src="./assets/icons/live.png"></a>
            <a href="${cards.demoLink}"><span class="see-link">See Source</span>
            <img src="./assets/icons/giticon.png">
            </a>
          </div>
        </div>
    </div>`;
    });
    mobileModalContainer.innerHTML = modalCard;
  }

  const desktopModalContainer = document.querySelector('.desktop-popup-window');
  function addDesktopModal() {
    let desktopModalCard = '';
    modals.forEach((cards) => {
      let skills2 = '';
      for (let i = 0; i < cards.skills2.length; i += 1) {
        skills2 += `<li>${cards.skills2[i]}</li>`;
      }
      desktopModalCard += `<div class="desktopModal" id ="${cards.no}">
          <div class="card">
          <a href="#" class="close-btn">&times;</a>
          <div class="tonic-area">
              <h2 class="cards-details">${cards.cardTitle2}</h2>
            <div class="highlights">
              <span class="highlight-text">${cards.company2}</span>
              <img src="./assets/images/Counter.png" alt="Counter.png" />
              <span class="countertext">${cards.role2}</span>
              <img src="./assets/images/Counter.png" alt="Counter.png" />
              <span class="year">${cards.year}</span>
            </div>
          </div>
          <img class="card-image" src="${cards.cardImage2}" alt="project1.png"/>
          <div class="tonic-area2">
            
            <article class="cards-description">
              <p>
              ${cards.description2}
                 </p>
            </article>
            <div>
            <ul class="skills">
            ${skills2}
            </ul>
            <div class="border"></div>
              <div class="modal-links">
                <a href="https://mercymugambi.github.io/portfolio/"><span class="see-link">See live</span>
                <img src="./assets/icons/live.png"></a>
                <a href="https://github.com/mercymugambi/portfolio"><span class="see-link">See Source</span>
                <img src="./assets/icons/giticon.png">
                </a>
              </div>
              </div>
          </div>
          </div>
        </div>`;
    });
    desktopModalContainer.innerHTML = desktopModalCard;
  }

  // call function
  addMobileCard();
  addDesktopCard();
  addMobileModal();
  addDesktopModal();
};

// Form Validation
	

	const errorMsg = document.getElementById('error-msg');
	const email = document.getElementById('email');
	const form = document.getElementById('form');
	

	form.addEventListener('submit', (e) => {
	  if (email.value !== email.value.toLowerCase()) {
	    e.preventDefault();
	    errorMsg.style.display = 'flex';
	  } else {
	    errorMsg.style.display = 'none';
	  }
	});
