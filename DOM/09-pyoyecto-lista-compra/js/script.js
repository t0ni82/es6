//Traer las refeéncias de los elementos del DOM
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const btnClear = document.querySelector("#clear");
const itemFilter = document.querySelector("#filter");
const formBtn = document.querySelector("#mi-boton");
let isEditMode = false;

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
  //Miramos si estamos en modo edit
  if (isEditMode) {
    //Modo edicion
    const itemToEdit = document.querySelector(".edit-mode");

    if (itemToEdit.textContent !== newItem) {
      //Actualizar de verdad en caso de que sea distinto
      //al valor nuevo del input y no exista en localSorage
      if (checkIfItemExists(newItem) !== -1) {
        alert("El item ya está en la lista");
        itemInput.value = "";
        return;
      }
      const itemIndex = checkIfItemExists(setItemToEdit.textContent);
      updateItemFromLocalStorage(newItem, itemIndex);
      itemToEdit.textContent = newItem;
      const button = createButton("remove-item btn-link text-red");
      itemToEdit.appendChild(button);
    }
    itemToEdit.classList.remove("edit-mode");
    isEditMode = false;
  } else {
    //Modo agregar nuevo
    //   //si el elemeto existe no se añade
    if (checkIfItemExists(newItem) !== -1) {
      alert("El item ya está en la lista");
      itemInput.value = "";
      return;
    }
    //Inserta el elemento en el DOM
    const li = createNewItem(newItem);
    itemList.appendChild(li);

    //Añadir el elemento al localStorage
    addItemToLocalStorage(newItem);
  }

  //Refrescamos el UI
  checkUI();
  //Limpiar el campo de texto
  itemInput.value = "";
}

function removeItem(item) {
  if (confirm("Vas ha eliminar el item")) {
    item.remove();
    removeItemFromLocalStorage(item.textContent);
    checkUI();
  }
}
//Mirar si eliminamos o editamos
function onclickItem(evt) {
  if (evt.target.parentElement.classList.contains("remove-item")) {
    removeItem(evt.target.parentElement.parentElement);
  } else if (evt.target.tagName === "LI") {
    console.log("Entramos en modo edicion!!");
    setItemToEdit(evt.target); //passamos el elemnto li a editar
  }
}

/**  Modo edición **/
function setItemToEdit(item) {
  isEditMode = true;
  console.log(item);
  itemInput.value = item.textContent;
  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Actualizar Item';
  formBtn.style.backgroundColor = "#228b22";

  //Eliminar el event listener del itemList
  itemList.removeEventListener("click", onclickItem);

  itemList.querySelectorAll("li").forEach((item) => {
    item.querySelector("i").style.color = "#ccc";
  });
}

function clearItems() {
  // itemList.innerHTML = "";
  if (confirm("Vas ha eliminar toda la lista")) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    //limpiar el localStorage
    localStorage.removeItem("lista");
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

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Añadir Item';
  formBtn.style.backgroundColor = "#333";

  //Eliminar el event listener del itemList
  itemList.addEventListener("click", onclickItem);

  itemList.querySelectorAll("li").forEach((item) => {
    item.querySelector("i").style.color = "red";
  });

  isEditMode = false;
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
function updateItemFromLocalStorage(item, itemIndex) {
  //Traer los datos del localStorage
  const itemsFromLocalStorage = getItemsFromLocalStorage();
  itemsFromLocalStorage.splice(itemIndex, 1, item); //TODO con map
  localStorage.setItem("lista", JSON.stringify(itemsFromLocalStorage));
}
/**
 *
 * @param {String} item
 * @returns el indice del item si lo ecuentra, sinó -1
 */
function checkIfItemExists(item) {
  //Traer los datos del localStorage
  const itemsFromLocalStorage = getItemsFromLocalStorage();
  //Mira si existe
  return itemsFromLocalStorage.indexOf(item);
}

//Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", onclickItem);
btnClear.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems);
