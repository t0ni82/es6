//Ejemplo de Fetch
//Metodos HTTP (Verbos)
//Las API REst suelen implementar los siguientes métodos:
//GET para pedir datos
//POST para añadir datos
//PUT para actualizar datos
//DELETE para eliminar

//Vamos a usar esta api https://jsonplaceholder.typicode.com
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

//Obtener los primeros X TODOS
const getTodos = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        console.log(todo);
      });
    });
};

//Añadir un TODO
const createTodo = (todo) => {
  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

console.log("Cargando datos...");
// getTodos();
const todo = {
  userId: 2,
  title: "Comprar una fregona de un vez!!",
  compledted: false,
};
createTodo(todo);
console.log("El script sigue...");
