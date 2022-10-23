const tC = 10   ;
const skmH = 5;

document.querySelector('.windspeed').textContent = tC;
document.querySelector('.windchill').textContent = skmH;

const tF = tC * (9/5) + 32;
const smH = skmH / 1.609;

console.log(tF);
console.log(smH);


if (tF <= 50 && smH > 3) {
const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16)
document.querySelector('.wind').textContent = f.toFixed(1);
}
else {
  document.querySelector('.wind').textContent = 'N/A';
}