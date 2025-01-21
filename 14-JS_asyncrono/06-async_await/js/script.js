function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Algo ha ido mal");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData("./peli.json")
//   .then((pelis) => {
//     console.log(pelis);
//     return getData("./directores.json");
//   })
//   .then((directores) => {
//     console.log(directores);
//     return getData("./actores.json");
//   })
//   .then((actores) => {
//     console.log(actores);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Lo mismo con async await
async function getAllData() {
  const pelis = await getData("./pelis.json");
  const directores = await getData("./directores.json");
  const actores = await getData("./actores.json");
  console.log(pelis, directores, actores);
}

// getAllData();

async function getAllDataFetch() {
  const pelisRes = await fetch("./pelis.json");
  const pelis = await pelisRes.json();
  const directoresRes = await fetch("./directores.json");
  const directores = await directoresRes.json();
  const actoresRes = await fetch("./actores.json");
  const actores = await actoresRes.json();
  console.log(pelis, directores, actores);
}
// getAllDataFetch();

//Esperar a todas las promesas
async function getAllDataPromiseAll() {
  const [pelis, directores, actores] = await Promise.all([
    fetch("./pelis.json").then((res) => res.json()),
    fetch("./directores.json").then((res) => res.json()),
    fetch("./actores.json").then((res) => res.json()),
  ]);
  console.log(pelis, directores, actores);
}

getAllDataPromiseAll();
console.log("Hilo principal");
//Investigar promise.ALL
