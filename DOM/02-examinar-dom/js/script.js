let out;

out = document.all;
out = document.all[11];
out = document.all.length;

//Todo el documento html
out = document.documentElement;
out = document.body;
out = document.head;
out = document.head.children;
out = document.body.children;

//Algunas propiedades random
out = document.URL;
out = document.characterSet;
out = document.contentType;

//Obtener los formularios
out = document.forms;
out = document.forms[0];
out = document.forms[0].id;
out = document.forms[0].method;
output = document.forms[0].action;

//Obtener todos los enlaces
out = document.links;

const enlaces = document.links;
for (let link of enlaces) {
  console.log(link.href);
}
//Hacer lo mismo pero para todos los enlaces de las imagenes
out = document.images;
const imagenes = document.images;

for (let imagen of imagenes) {
  console.log(imagen.src);
}
//Convertir HTMLCollection a Array
const imgArray = Array.from(document.images);
imgArray.forEach((img) => (img.src = "https://cataas.com/cat/gif"));

console.log(out);
