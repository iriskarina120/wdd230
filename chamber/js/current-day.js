window.onload = function () {
    const banner = document.getElementById("invite-chamber");
    if (now.getDay() != 1 && now.getDay() != 2) banner.style.display = "none";
    else banner.style.display = "block";
  };