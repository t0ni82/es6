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
//Devuelve el arry del carrito
export const getCarrito = () => carrito;

//Obtener los productos del carrito
export const mostrarCarrito = () => {
  console.log("Carrito:");
  console.table(carrito);
};
