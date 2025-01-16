//XMLHTTPrequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "./pelis.json"); //https://pokeapi.co/api/v2/pokemon?limit=10
xhr.onreadystatechange = function () {
  //Estados de la petición
  /*
    0: peticion no inicializada
    1: conexión con el server establecida
    2: peticion recibida por el server
    3: procesando la petición
    4: peticion lista para leer lo datos
    */
  console.log("Cambio de estado de la peticion");
  console.log("Codigo estado: ", this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    //convertimos a array para trabajar con los datos
    const data = JSON.parse(this.responseText);
    //insertar los datos en el HTML
    data.forEach((peli) => {
      const li = document.createElement("li");
      li.innerHTML = `Título: ${peli.title}, año: ${peli.year}`;
      document.querySelector("#pelis").appendChild(li);
    });
    console.log(data);
  }
};

xhr.send();

console.log("Página cargada");
