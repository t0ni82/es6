//Traer las refeéncias de los elementos del DOM
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const btnClear = document.querySelector("#clear");
const itemFilter = document.querySelector("#filter");

/**
 * @description Obtiene los datos del LStorage y refresca la lista
 */
function displayItems() {
  const lista = getItemsFromLocalStorage();
  lista.forEach((item) => {
    const li = createNewItem(item);
    itemList.appendChild(li);
  });
  checkUI();
}
/**
 *
 * @param {SubmitEvent} evt
 */
function addItem(evt) {
  evt.preventDefault(); //Previene el evento submit del formulario

  //Validar que el input no esté vacio
  const newItem = itemInput.value.trim();
  //Si el campo está vacio avisamos al usuario y salimos de la funcion
  if (newItem === "") {
    alert("Por favor añade un tecto");
    return;
  }

  //Inserta el elemento en el DOM
  const li = createNewItem(newItem);
  itemList.appendChild(li);

  //Añadir el elemento al localStorage
  addItemToLocalStorage(newItem);

  //Refrescamos el UI
  checkUI();
  //Limpiar el campo de texto
  itemInput.value = "";
}
function removeItem(evt) {
  if (evt.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Vas ha eliminar el item")) {
      evt.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}
function clearItems() {
  // itemList.innerHTML = "";
  if (confirm("Vas ha eliminar toda la lista")) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    checkUI();
  }
}
function filterItems(evt) {
  const text = evt.target.value.toLowerCase();
  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.includes(text)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

/*********     Funciones para la creación de los elementos de la lista **********/
function createNewItem(textItem) {
  const li = document.createElement("li");
  const text = document.createTextNode(textItem);
  li.appendChild(text);

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
/**
 * @description Habilita o desabilita los elementos graficos según si
 * hay items en la lista o no
 */
function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    btnClear.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    btnClear.style.display = "block";
    itemFilter.style.display = "block";
  }
}

/***************   Local Storage functions ****************/
function addItemToLocalStorage(item) {
  //Traer los datos del localStorage
  const itemsFromLocalStorage = getItemsFromLocalStorage();
  //añadir el nuevo item al array
  itemsFromLocalStorage.push(item);
  //Convertir el array a texto y lo guardamos
  localStorage.setItem("lista", JSON.stringify(itemsFromLocalStorage));
}
function getItemsFromLocalStorage() {
  let itemsFromLocalStorage;
  if (localStorage.getItem("lista") === null) {
    itemsFromLocalStorage = [];
  } else {
    itemsFromLocalStorage = JSON.parse(localStorage.getItem("lista"));
  }
  //Quiero devolver un array, no texto ni null
  return itemsFromLocalStorage;

  /*
  const items = localStorage.getItem("lista");
  if (items === null) {
    return [];
  }
  return JSON.parse(items);
  */
}
function removeItemFromLocalStorage(item) {
  //Traer los datos del localStorage
  let itemsFromLocalStorage = getItemsFromLocalStorage();
  //eliminar el elemento del array
  itemsFromLocalStorage = itemsFromLocalStorage.filter((i) => i !== item);
  //Convertir el array a texto y lo guardamos
  localStorage.setItem("lista", JSON.stringify(itemsFromLocalStorage));
}
//funcion que devuelve el indice de un elemento
//  si exixte en la lista o -1 si nó existe
function checkIfItemExists(item) {
  //Traer los datos del localStorage
  const itemsFromLocalStorage = getItemsFromLocalStorage();
  //Mira si existe
  return itemsFromLocalStorage.indexOf(item);
}

//TODO funcion update

//Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
btnClear.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems);
