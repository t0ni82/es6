//Traer una referéncia del
//objeto (elemento)canvas
const canvas = document.getElementById("mycanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

console.log(ctx);
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(60, 40, 30, 30);

ctx.fillStyle = "#00ff00";
ctx.fillRect(60, 100, 30, 30);

ctx.fillStyle = "#0000ff";
ctx.beginPath();
ctx.arc(30, 30, 10, 0, 2 * Math.PI);
ctx.fill();
