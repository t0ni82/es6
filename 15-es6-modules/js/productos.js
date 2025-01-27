const productos = [
  { id: 1, nombre: "Laptop", precio: 100 },
  { id: 2, nombre: "Mouse", precio: 10 },
  { id: 3, nombre: "Teclado", precio: 20 },
];

export const getProductos = () => productos;

export const getProductoById = (id) =>
  productos.find((producto) => producto.id === id);

export default productos;
