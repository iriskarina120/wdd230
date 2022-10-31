const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }

  img.src = src;

}

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px 10px 0px'
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => { 
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);

})

//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector('#year').innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)

document.getElementById('currentDate').innerText = dateFormated;