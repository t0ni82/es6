const products = document.querySelector(".products-center");

const baseUrl = "https://www.course-api.com/javascript-store-producxts/";

const fetchProducts = async () => {
  products.innerHTML = "<div class='loading'></div>";
  try {
    const res = await fetch(baseUrl);
    if (res.status === 404) {
      throw new Error("Peticion fallida");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    products.innerHTML = '<p class="error">Se ha producido un error</p>';
  }
};

const displayProducts = (list) => {
  //TODO montar el html con los datos del array
};
