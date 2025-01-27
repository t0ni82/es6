import { getProductoById } from "./productos.js";
import { formatPrice } from "./utils.js";

let carrito = [];

export const agregarAlCarrito = (id, cantidad) => {
  const producto = getProductoById(id);
  if (!producto) {
    console.log("Producto no encontrado");
    return;
  }

  carrito.push({
    ...producto,
    cantidad,
  });
  console.log(`${cantidad} x ${producto.nombre} añadido al carrito`);
};

//TODO los productos del carrito
