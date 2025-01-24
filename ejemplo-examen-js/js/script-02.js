document.body.style.fontFamily = "Arial, sans-serif";

const nicName = document.getElementById("nickname");
const favorites = document.getElementById("favorites");
const ciudad = document.getElementById("ciudad");

const userInfo = {
  nickname: "Miguel",
  favorites: "Futbol, Musica, Videojuegos",
  ciudad: "Madrid",
};

const nicNameText = document.createTextNode(userInfo.nickname);
const favoritesText = document.createTextNode(userInfo.favorites);
const ciudadText = document.createTextNode(userInfo.ciudad);

nicName.appendChild(nicNameText);
favorites.appendChild(favoritesText);
ciudad.appendChild(ciudadText);

document.querySelectorAll("li").forEach((item) => {
  item.classList.add("color-list-item");
});

const img = document.createElement("img");
img.src = "./images/imagen_perfil.png";
document.body.appendChild(img);
