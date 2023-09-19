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
    cardTitle: 'TODO-List',
    description: 'Todays to-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. This simple web page is built using webpack, es6 and served by a webpack dev server.',
    company: 'MICROVERSE',
    cardTitle2: 'TODO-List',
    description2: 'Todays to-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. This simple web page is built using webpack, es6 and served by a webpack dev server.',
    company2: 'MICROVERSE',
    no: 'd1',
    cardImage2: './image/todo3.PNG" alt="project1.png',
    role2: 'Front-End Dev',
    cardImage: '<img class="card-image" src="./image/todo3.PNG" alt="project1.png"/>',
    skills2: ['HTML', 'CSS', 'Javascript'],
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
  // card2 details
  {
    id: '2',
    cardTitle: 'Country Metrics',
    description: 'This is a web application that provides information about population in different countries in Africa. It allows users to explore population by country and view details of individual country.',
    company: 'Microverse',
    cardTitle2: 'Country Metrics',
    description2: 'This is a web application that provides information about population in different countries around the world. It allows users to explore population by country and view details of individual country.',
    company2: 'Microverse',
    no: 'd2',
    cardImage2: './image/pop_metrics1.PNG" alt="project1.png',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'React, Redux', 'CSS', 'Javascript'],
    cardImage: '<img class="card-image" src="./image/pop_metrics1.PNG" alt="project1.png" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
  // card3 Details
  {
    id: '3',
    cardTitle: 'Space Travel App',
    description: 'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
    company: 'Microverse',
    cardTitle2: 'Space Travel App',
    description2: 'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
    company2: 'Microverse',
    no: 'd3',
    cardImage2: './image/space_travel.PNG" alt="project1.png',
    role2: 'Full Stack Dev',
    skills2: ['HTML', 'CSS', 'React', 'Javascript'],
    cardImage: '<img class="card-image" src="./image/space_travel.PNG" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
  // card4 Details
  {
    id: '4',
    cardTitle: 'Math Magician',
    description: 'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company: 'Microverse',
    cardTitle2: 'Math Magician',
    description2: 'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company2: 'Microverse',
    no: 'd4',
    cardImage2: './image/calculator1.PNG" alt="project1.png',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'CSS', 'React', 'Javascript'],
    cardImage: '<img class="card-image" src="./image/calculator1.PNG" alt="project1.png" alt="project4.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
];

// Create the mobile modal object with elements
const modals = [
  { // card 1 details
    cardTitle: 'TODO-List',
    description: 'Todays to-do list" is a tool that helps to organize your day.',
    company: 'Microverse',
    cardTitle2: 'TODO-List',
    no: 'd1',
    description2: 'Todays to-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. This simple web page is built using webpack, es6 and served by a webpack dev server.',
    company2: 'Microverse',
    cardImage2: './image/todo3.PNG" alt="project1.png"',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'CSS', 'Javascript'],
    cardImage: './image/todo3.PNG" alt="project1.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    id: '1',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://to-do-list-p2a8.onrender.com/',
    demoLink: 'https://github.com/mercymugambi/to-do-list-webpack-project'
  },
  // card2 details
  {
    cardTitle: 'Country Metrics',
    description: 'This is a web application that provides information about population in different countries in Africa.',
    company: 'Microverse',
    cardTitle2: 'Country Metrics',
    no: 'd2',
    description2: 'This is a web application that provides information about population in different countries around the world. It allows users to explore population by country and view details of individual country.',
    company2: 'Microverse',
    cardImage2: './image/pop_metrics1.PNG" alt="project2.png"',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'React', 'Javascript'],
    cardImage: './image/pop_metrics1.PNG" alt="project2.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    id: '2',
    skills: ['HTML', 'React', 'Javascript'],
    counter2: './image/pop_metrics1" alt="project2.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://population-metrics.onrender.com/',
    demoLink: 'https://github.com/mercymugambi/country-filters-capstone',
  },
  // card3 Details
  {
    cardTitle: 'Space Travel',
    description: 'This is the Space Travel Hub website created with React using CRA CLI.',
    company: 'Microverse',
    cardTitle2: 'Space Travel App',
    no: 'd3',
    description2: 'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
    company2: 'Microverse',
    cardImage2: './image/space_travel.PNG" alt="project3.png"',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'React', 'Javascript'],
    cardImage: './image/space_travel.PNG" alt="project3.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    id: '3',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://space-travel-project.onrender.com/',
    demoLink: 'https://github.com/mercymugambi/space-travel-project',
  },
  // card4 Details
  {
    cardTitle: 'Math Magician',
    description: 'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations.',
    company: 'Microverse',
    cardTitle2: 'Math Magician',
    no: 'd4',
    description2: 'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company2: 'Microverse',
    cardImage2: './image/calculator1.PNG" alt="project4.png"',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'React', 'Javascript'],
    cardImage: './image/calculator1.PNG" alt="project4.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    id: '4',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://math-magician-ji5f.onrender.com/',
    demoLink: 'https://github.com/mercymugambi/math-magician',
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
          <ul class="skills skills-js">
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
        <ul class="skills skills-js">
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
        <ul class="skills skills-js">
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
            <ul class="skills skills-js skills-js-top">
            ${skills}
            </ul>
    
          <article class="card-description">
              <p>
              ${cards.description}
                </p>
          </article>
          
          <div class="border"></div>
          <div class="modal-links">
            <a href="${cards.sourceLink}" target="_blank" rel="noopener noreferrer"><span class="see-link">See live</span>
            <img src="./assets/icons/live.png"></a>
            <a href="${cards.demoLink}" target="_blank" rel="noopener noreferrer"><span class="see-link">See Source</span>
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
              <ul class="skills skills-js">
              ${skills2}
              </ul>
          </div>
          <div class="tonic-area2">
            
            <article class="cards-description">
              <p>
              ${cards.description2}
                 </p>
            </article>
            <div>
            <div class="border"></div>
              <div class="modal-links">
              <a href="${cards.sourceLink}" target="_blank" rel="noopener noreferrer"><span class="see-link">See live</span>
              <img src="./assets/icons/live.png"></a>
              <a href="${cards.demoLink}" target="_blank" rel="noopener noreferrer"><span class="see-link">See Source</span>
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

  // Form Validation
  const email = document.getElementById('email');
  const form = document.getElementById('contact');
  const errorMsg = document.getElementById('error-msg');

  form.addEventListener('submit', (event) => {
    if (email.value !== email.value.toLowerCase()) {
      errorMsg.style.visibility = 'visible';
      event.preventDefault();
    } else if (email.validity.typeMismatch) {
      errorMsg.textContent = 'Please enter a valid email address';
      errorMsg.style.validity = 'visible';
      event.preventDefault();
    } else {
      errorMsg.style.visibility = 'hidden';
    }
  });
};
