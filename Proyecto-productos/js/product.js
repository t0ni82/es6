const productDOM = document.querySelector(".product");
const baseUrl = "https://www.course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class=".product-loading">Cargando...</h4>';
    //console.log(window.location.search); //?id=kjf3425gfdsg&name="john"
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const res = await fetch(`${baseUrl}?id=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">Se ha producido un error</p>';
  }
};

const displayProduct = (product) => {
  console.log(product);
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();
  //colores
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}">
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorList}
          </div>
          <p>${description}</p>
          <button class="btn">add to cart</button>
        </div>
</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
console.log("El script sigue");
