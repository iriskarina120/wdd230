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
let numVisits = Number(window.localStorage.getItem('visits'));
let thisvisit = Date.now();
if (numVisits != 0) {
  let FACTOR = 86400000;
  let daysBetween = (thisvisit - numVisits) / FACTOR;
  document.querySelector('.visits').textContent = 'You visit this site ' + daysBetween.toFixed(0) + ' day(s) ago.';
} else {
  window.localStorage.setItem('visits', Date.now());
  document.querySelector('.visits').textContent = 'This is your first visit!'; 
}
  window.localStorage.setItem('visits', thisvisit);