import { getProductos } from "./productos.js";
import { agregarAlCarrito, mostrarCarrito, getCarrito } from "./carrito.js";
import { formatPrice } from "./utils.js";

const app = document.querySelector("#app");

//Mostar los productos disponibles
const renderizarProductos = () => {
  const productos = getProductos();

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${formatPrice(producto.precio)}</p>
            <button class="btn-add" data-id="${
              producto.id
            }">Agregar al carrito</button>
        `;
    app.appendChild(div);
  });
};

const actualizarCarrito = () => {
  const carritoDiv = document.querySelector("#carrito");
  const carrito = getCarrito();
  carritoDiv.innerHTML = "";
  if (carrito.length === 0) {
    carritoDiv.innerHTML = "<p>El carrito está vacío</p>";
  } else {
    carrito.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - ${item.cantidad} x ${formatPrice(
        item.precio
      )}`;
      carritoDiv.appendChild(li);
    });
  }
};

//Obtener el id del producto al hacer click en el boton
app.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-add")) {
    const id = Number(event.target.dataset.id);
    console.log(typeof id);
    agregarAlCarrito(id, 1);
    actualizarCarrito();
    mostrarCarrito();
  }
});

const initApp = () => {
  renderizarProductos();
  actualizarCarrito();
};

initApp();
