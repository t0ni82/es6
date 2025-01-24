const libros = [
  {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    leido: true,
    imagen: "./images/libro1.jpg",
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    leido: false,
    imagen: "./images/libro2.jpg",
  },
  {
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    leido: true,
    imagen: "./images/libro3.png",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    leido: false,
    imagen: "./images/libro4.jpg",
  },
];

const librosDOM = document.getElementById("libros");

libros.forEach((libro) => {
  const libroContainer = document.createElement("div");
  libroContainer.innerHTML = `
    <div>
      <img src="${libro.imagen}"  alt="${libro.titulo}">
      <div>
        <h5>${libro.titulo}</h5>
        <p>Autor: ${libro.autor}</p>
        <p class= ${libro.leido ? "leido" : "no-leido"}>${
    libro.leido ? "Leído" : "No leído"
  }</p>
      </div>
    </div>
  `;

  librosDOM.appendChild(libroContainer);
});
