const div = document.querySelector(".directory-buttons");
const cardsButton = document.getElementById("card-button");
const listButton = document.getElementById("list-button");
const cards = document.getElementById("cards");
const list = document.getElementById("list");

cardsButton.addEventListener(
  "click",
  () => {
    list.classList.add("hidden");
    cards.classList.remove("hidden");
  },
  false
);

listButton.addEventListener(
  "click",
  () => {
    cards.classList.add("hidden");
    list.classList.remove("hidden");
  },
  false
);

if (window.innerWidth >= 520 && window.innerWidth <= 1120) {
  cards.classList.add("hidden");
  list.classList.remove("hidden");
} else {
  cards.classList.remove("hidden");
  list.classList.add("hidden");
}

const requestURL = "https://iriskarina120.github.io/wdd230/chamber/json/spotlights.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const member = jsonObject["members"];
    member.forEach(displayCards);
    member.forEach(displayList);
  });

function displayCards(member) {
  let cardView = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");
  let membership = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let site = document.createElement("a");
  cardView.setAttribute("class", "images");
  h2.textContent = `${member.name}`;
  image.setAttribute("src", member.logo);
  image.setAttribute("alt", `${member.name} Logo`);
  image.setAttribute("height", `62`);
  image.setAttribute("width", `62`);
  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  site.href = `${member.website}`;
  site.target = "_blank";
  site.textContent = `${member.website}`;
  membership.textContent = `Membership: ${member.level}`; 
  cardView.appendChild(image);
  cardView.appendChild(membership)
  cardView.appendChild(address);
  cardView.appendChild(phone);
  cardView.appendChild(site);
  document.querySelector("#cards").appendChild(cardView);
}
function displayList(member) {
  let listview = document.createElement("section");
  let h4 = document.createElement("h3");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let a = document.createElement("a");
  h4.textContent = `${member.name}`;
  p1.textContent = `${member.address}`;
  p2.textContent = `${member.phone}`;
  a.textContent = `${member.website}`;
  a.setAttribute("href", member.website);
  listview.appendChild(h4);
  listview.appendChild(p1);
  listview.appendChild(p2);
  listview.appendChild(a);
  document.querySelector("#list").appendChild(listview);
}