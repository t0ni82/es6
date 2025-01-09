//Selectores multiples
const lista = document.getElementsByClassName("item");
// console.log(lista[2].innerHTML);
//HTMLCollection no tiene el foreach
const listaArray = Array.from(lista);

listaArray.forEach((element) => {
  console.log(element.innerText);
});

const lista2 = document.getElementsByTagName("li");
console.log("Lista2: ", lista2);

//Query selector
const lista3 = document.querySelectorAll(".item");
console.log("lista3", lista3);
lista3.forEach((item, key) => {
  item.style.color = "red";
  if (key === 0) {
    // item.style.color = "green";
    item.remove();
  }
});

//Algunos aspectos de NodeList
// entries()
for (const entry of lista3.entries()) {
  console.log(entry); //[0, li.item]
}
//values
for (const value of lista3.values()) {
  console.log(value);
}
//Keys
for (const key of lista3.keys()) {
  console.log(key);
}

const lista4 = document.getElementById("item-list"); //ul
//Los query selectors se pueden usar sobre cualquier nodo
const hijosLista4 = lista4.querySelector(".item");
