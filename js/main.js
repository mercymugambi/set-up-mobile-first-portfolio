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

//   Cards section
let body = document.querySelector('body');

//div
let cardDiv = document.createElement('div');
//add card class to the div class
cardDiv.classList.add('card');
//add img to card div first
cardDiv.innerHTML = '<img class="card-image" src="./assets/images/project1.png" alt="project1.png"/>';

//query card section element to hold cards
let sectionContainer = document.querySelector('.projects-section');
//add div to webpage
sectionContainer.append(cardDiv);
//create tonic area section
let tonicDiv = document.createElement('div');
tonicDiv.classList.add('tonic-area');

//Add the text element h2 tonic area
let h2CardDetails = document.createElement('h2');
h2CardDetails.textContent = "TONIC";
tonicDiv.appendChild(h2CardDetails);
h2CardDetails.classList.add('cards-details');
//append h2 tonic to card div
cardDiv.append(tonicDiv);
//create div highlights
let highlightsDiv = document.createElement('div');
highlightsDiv.classList.add('highlights');
tonicDiv.append(highlightsDiv);
//Add elements to this div
let spanHighlights = document.createElement('span');
spanHighlights.textContent = "CANOPY";
spanHighlights.classList.add('highlight-text');
highlightsDiv.appendChild(spanHighlights);

//img cannopy
let imgCanopy = '<img src="./assets/images/Counter.png" alt="Counter.png" />';

//add image adjacent to canopy
highlightsDiv.insertAdjacentHTML('beforeend', imgCanopy)

//create spanCountertext
let spanCountertext = document.createElement('span');
spanCountertext.classList.add('countertext');
spanCountertext.textContent = "Back End Dev";
highlightsDiv.appendChild(spanCountertext);

//img cannopy
let imgCanopy2 = '<img src="./assets/images/Counter.png" alt="Counter.png" />';

//add image adjacent to canopy
highlightsDiv.insertAdjacentHTML('beforeend', imgCanopy2);

//create span year
let spanYear = document.createElement('span');
spanYear.classList.add('year');
spanYear.textContent = "2015";
highlightsDiv.appendChild(spanYear);

