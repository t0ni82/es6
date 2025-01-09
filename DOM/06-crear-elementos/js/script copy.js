//Crear elementos del DOM
const miDiv = document.createElement("div");
// miDiv.style.backgroundColor = "red";
miDiv.className = "text-red";
miDiv.id = "mi-id";
// miDiv.title = "Texto random";
//Mejor con método
miDiv.setAttribute("title", "Texto del titulo");
miDiv.classList.add("oculto");
// console.dir(miDiv);

// miDiv.innerHTML = "Soy un Div nuevo!!";
//Crear un nodo de texto
const texto = document.createTextNode("Soy un Div nuevo!!");
console.dir(texto);
//Añdadir el nodo de texto como hijo del elemento miDiv
miDiv.appendChild(texto);
console.log(miDiv);
