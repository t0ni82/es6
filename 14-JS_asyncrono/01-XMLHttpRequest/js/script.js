const pelis = [
  {
    title: "Piratas del caribe",
    year: 2003,
  },
  {
    title: "Titanic",
    year: 1998,
  },
  {
    title: "Hackers",
    year: 1995,
  },
  {
    title: "Avatar",
    year: 2009,
  },
];
console.log(pelis);
const pelisJSON = JSON.stringify(pelis);
console.log(pelisJSON);

let userJSON = '{"name":"John", "age":30, "car":null}';
console.log(typeof userJSON);

const user = JSON.parse(userJSON);
console.log(typeof user);
user.car = "BMW";

console.log(user);
userJSON = JSON.stringify(user);
console.log(userJSON);
