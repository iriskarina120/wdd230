const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('div');
    let birthplace = document.createElement('div');

    // set attributes
    card.setAttribute('class', 'images');
    birthdate.setAttribute('class', 'birth');
    birthplace.setAttribute('class', 'birth');

    // Change the textContent property of the h2 element to contain the prophet's full name.
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - prophet number ${prophet.order} of Jesus Christ's Latter-Day Church.`);
    portrait.setAttribute('loading', 'lazy');

    // add birthdate and birthplace
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}