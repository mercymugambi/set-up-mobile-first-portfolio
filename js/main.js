//fixing of hamburger
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

//Create the object with elements
let projectCardArray = [
    { //card 1 details
        cardTitle: 'TONIC',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        company: 'CANOPY',
        cardImage: '<img class="card-image" src="./assets/images/project1.png" alt="project1.png"/>',
        counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        role: 'Back End Dev',
        skills: ['HTML', 'CSS', 'Javascript'],
        counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        year: '2015',
    },
    //card2 details
    {
        cardTitle: 'TONIC',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        company: 'CANOPY',
        cardImage: '<img class="card-image" src="./assets/images/project2.png" alt="project1.png" />',
        counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        role: 'Back End Dev',
        skills: ['HTML', 'CSS', 'Javascript'],
        counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        year: '2015',
    },
    //card3 Details
    {
        cardTitle: 'TONIC',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        company: 'CANOPY',
        cardImage: '<img class="card-image" src="./assets/images/project3.png" alt="project1.png" />',
        counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        role: 'Back End Dev',
        skills: ['HTML', 'CSS', 'Javascript'],
        counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        year: '2015',
    },
    //card4 Details
    {
        cardTitle: 'TONIC',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        company: 'CANOPY',
        cardImage: '<img class="card-image" src="./assets/images/project4.png" alt="project4.png" />',
        counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        role: 'Back End Dev',
        skills: ['HTML', 'CSS', 'Javascript'],
        counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
        year: '2015',
    },
    ];
 window.onload = function loader() {

//   Cards section
let body = document.querySelector('body');

//query card section element to hold cards
const sectionContainer = document.querySelector('.projects-section');

projectCardArray.forEach(cards => {
//div
const cardDiv = document.createElement('div');
//add card class to the div class
cardDiv.classList.add('card');
//add img to card div first
cardDiv.innerHTML = `${cards.cardImage}`;

//add div to webpage
sectionContainer.append(cardDiv);
//create tonic area section
const tonicDiv = document.createElement('div');
tonicDiv.classList.add('tonic-area');

//Add the text element h2 tonic area
const h2CardDetails = document.createElement('h2');
h2CardDetails.textContent = `${cards.cardTitle}`;
tonicDiv.appendChild(h2CardDetails);
h2CardDetails.classList.add('cards-details');
//append h2 tonic to card div
cardDiv.append(tonicDiv);
//create div highlights
const highlightsDiv = document.createElement('div');
highlightsDiv.classList.add('highlights');
tonicDiv.append(highlightsDiv);
//Add elements to this div
const spanHighlights = document.createElement('span');
spanHighlights.textContent = `${cards.company}`;
spanHighlights.classList.add('highlight-text');
highlightsDiv.appendChild(spanHighlights);

//add image adjacent to canopy
highlightsDiv.insertAdjacentHTML('beforeend', `${cards.counter1}`)

//create spanCountertext
const spanCountertext = document.createElement('span');
spanCountertext.classList.add('countertext');
spanCountertext.textContent = "Back End Dev";
highlightsDiv.appendChild(spanCountertext);

//add image adjacent to canopy
highlightsDiv.insertAdjacentHTML('beforeend', `${cards.counter2}`);

//create span year
const spanYear = document.createElement('span');
spanYear.classList.add('year');
spanYear.textContent = `${cards.year}`;
highlightsDiv.appendChild(spanYear);

//create article section
const cardsDescription = document.createElement('article');
cardsDescription.classList.add('cards-description');
tonicDiv.append(cardsDescription);

//create p on article
const pDescription = document.createElement('p');
pDescription.textContent = `${cards.description}`;
cardsDescription.appendChild(pDescription);

//Add skills ul
const skillsTec = document.createElement('ul');
skillsTec.classList.add('skills');
tonicDiv.append(skillsTec);

//skills li
for (let i = 0; i < cards.skills.length; i++) {
    const skillsTecLi = document.createElement('li');
    skillsTecLi.innerHTML = `${cards.skills[i]}`;
    skillsTec.append(skillsTecLi);
}




})
};