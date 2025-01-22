const productsDOM = document.querySelector(".products-center");

const baseUrl = "https://www.course-api.com/javascript-store-products";

const fetchProducts = async () => {
  productsDOM.innerHTML = "<div class='loading'></div>";
  try {
    const res = await fetch(baseUrl);
    if (res.status === 404) {
      throw new Error("Peticion fallida");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    productsDOM.innerHTML = '<p class="error">Se ha producido un error</p>';
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;

      const listElement = `<a class="single-product" href="product.html?id=${id}">
                            <img class="single-product-img img" src="${img}" alt="${title}">
                            <footer>
                                <h5 class="name">${title}</h5>
                                <span class="price">${formatPrice}€</span>
                            </footer>
                          </a>`;
      // console.log(id, title, price, img);
      return listElement;
    })
    .join("");
  console.log(productList);
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

// fetchProducts().then((data) => {
//   console.log(data);
//   displayProducts(data);
// });

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
console.log("El script sigue");
