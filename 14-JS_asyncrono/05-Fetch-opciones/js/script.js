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
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((todo) => {
        console.log(todo);
      });
    });
};

//Obtener un TODO por id
const getTodoById = (id) => {
  fetch(`${apiUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

//Obtener los todos completados
const getTodosComleted = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const completedTodos = data.filter((todo) => todo.completed);
      completedTodos.forEach((todo) => {
        console.log(todo);
      });
    });
};

//Añadir un TODO
const createTodo = (todo) => {
  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

//Actualizar un TODO
const updateTodo = (todo) => {
  fetch(`${apiUrl}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

//DELETE todo por id
const deleteTodo = (id) => {
  fetch(`${apiUrl}/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

console.log("Cargando datos...");
// getTodos();
// const todo = {
//   userId: 2,
//   title: "Comprar una fregona de un vez!!",
//   compledted: false,
// };
// createTodo(todo);
const todo = {
  id: 1,
  userId: 2,
  title: "Comprar una fregona de un vez!!",
  completed: false,
};
updateTodo(todo);

console.log("El script sigue...");
