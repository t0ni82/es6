//Rapida de escribir pero poco eficiente
/*
      <li>
        Leche
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
*/

//Traer referencia del input
const itemInput = document.querySelector("#item-input");
//Traer una referencia al boton
const btnAddItem = document.querySelector("#mi-boton");
//Traer una referencia a la lista
const lista = document.querySelector("#item-list");

//Event Listeners
btnAddItem.addEventListener("click", () => {
  console.log("Añadir item!!!", itemInput.value);
  // console.time("version-A");
  // createListItem1(itemInput.value);
  // console.timeEnd("version-A");
  console.time("version-B");
  createListItem2(itemInput.value);
  console.timeEnd("version-B");
});

//funciones
//Version senzilla pero no demasiado limpia
function createListItem1(textItem) {
  let listaTextoHtml = lista.innerHTML;
  listaTextoHtml += `<li>${textItem}
                           <button class="remove-item btn-link text-red">
                              <i class="fa-solid fa-xmark"></i>
                          </button>
                      </li>`;
  lista.innerHTML = listaTextoHtml;
}

//Limpia y más rendimiento
function createListItem2(textItem) {
  const li = document.createElement("li"); //<li></li>
  const text = document.createTextNode(textItem); //texto...
  li.appendChild(text); //<li>texto...</li>

  const button = document.createElement("button"); //<button></button>
  button.className = "remove-item btn-link text-red"; //<button class="remove-item btn-link text-red"></button>

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark"; //<i class="fa-solid fa-xmark"></i>

  button.appendChild(icon);
  /*
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>
  */
  li.appendChild(button);
  /*
  <li>
    texto...
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
      </button>
  </li>
  */
  lista.appendChild(li);
}
