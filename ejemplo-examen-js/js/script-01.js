const libros = [
  {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    leido: true,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    leido: false,
  },
  {
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    leido: true,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    leido: false,
  },
];

libros.forEach((libro) => {
  const mensaje = libro.leido
    ? `Has leído ${libro.titulo} de ${libro.autor}`
    : `No has leído ${libro.titulo} de ${libro.autor}`;
  console.log(mensaje);
});
