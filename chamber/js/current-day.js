const today = document.querySelector(".date");
const now = new Date();
const fullday = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
today.innerHTML = `<em>${fullday}</em>`;
