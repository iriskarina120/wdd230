const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=18c8bf76cd78c6fd658900bc90c158f1";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    currentTemp.innerHTML =`<strong>${jsObject.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    document.querySelector('#icon-src').textContent = iconsrc;
  });