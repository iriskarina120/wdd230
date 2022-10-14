const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  let myItem = input.value;
  if (input.value != "") {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "X";
    list.appendChild(listItem);
    document.querySelector("#empty_value").textContent = "";
    listBtn.onclick = function () {
      list.removeChild(listItem);
    };
    input.focus();
  } else {
    document.querySelector("#empty_value").textContent =
      "You have not added any chapter";
  }
};