//Obtener las pelis usando fetch
fetch("./pelis.json")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch("./ejemplo.txt")
  .then((res) => {
    console.log(res);
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });

//Apis publicas para practicar
//https://github.com/public-apis/public-apis

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
