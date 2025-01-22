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

/*
<div class="product-wrapper">
        <img src="https://course-api.com/images/store/product-1.jpeg" class="img" alt="high-back bench">
        <div class="product-info">
          <h3>high-back bench</h3>
          <h5>ikea</h5>
          <span>9.99</span>
          <div class="colors">
            <span class="product-color" style="background: #f15025"></span><span class="product-color" style="background: #222"></span>
          </div>
          <p>
           Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
          </p>
          <button class="btn">add to cart</button>
        </div>
</div>
*/
const displayProduct = (product) => {};
const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
console.log("El script sigue");
