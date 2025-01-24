const librosDOM = document.getElementById("libros");

async function obtenerLibros() {
  try {
    const response = await fetch("json/libros.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
}

function renderizarLibros(libros) {
  libros.forEach((libro) => {
    const libroContainer = document.createElement("div");
    libroContainer.innerHTML = `
    <div>
      <img src="${libro.imagen}"  alt="${libro.titulo}">
      <div>
        <h5>${libro.titulo}</h5>
        <p>Autor: ${libro.autor}</p>
        <button class= ${libro.leido ? "leido" : "no-leido"}>${
      libro.leido ? "Leído" : "No leído"
    }</button>
      </div>
    </div>
  `;

    librosDOM.appendChild(libroContainer);
  });
}

obtenerLibros()
  .then((libros) => {
    renderizarLibros(libros);
    const librosBtn = document.querySelectorAll("button");
    librosBtn.forEach((libroBtn) => {
      libroBtn.addEventListener("click", (evt) => {
        console.log(libroBtn);
        if (libroBtn.classList.contains("leido")) {
          libroBtn.classList.remove("leido");
          libroBtn.classList.add("no-leido");
          libroBtn.textContent = "No leído";
        } else {
          libroBtn.classList.remove("no-leido");
          libroBtn.classList.add("leido");
          libroBtn.textContent = "Leído";
        }
      });
    });
  })
  .catch((error) => console.error("Error: ", error));
