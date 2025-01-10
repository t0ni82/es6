const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const lista = document.querySelector("#item-list");

//Event Listeners
itemForm.addEventListener("submit", (evt) => {
  console.log(evt);
  evt.preventDefault();
  console.log("Añadir item!!!", itemInput.value);
  const newItem = createListItem(itemInput.value);
  lista.appendChild(newItem);
});

//Limpia y más rendimiento
function createListItem(textItem) {
  const li = document.createElement("li"); //<li></li>
  const text = document.createTextNode(textItem); //texto...
  li.appendChild(text); //<li>texto...</li>

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  return li;
}

function createButton(clases) {
  const button = document.createElement("button");
  button.className = clases;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(clases) {
  const icon = document.createElement("i");
  icon.className = clases;
  return icon;
}
