//Traer una referéncia del
//objeto (elemento)canvas
const canvas = document.getElementById("mycanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

const enemies = [
  {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    color: "red",
    speedY: 1,
  },
  {
    x: 260,
    y: 100,
    w: 40,
    h: 40,
    color: "red",
    speedY: 2,
  },
  {
    x: 380,
    y: 100,
    w: 40,
    h: 40,
    color: "red",
    speedY: 0.5,
  },
];
/**
 * Añadir enemigos hasta 5 y modificar el update y el draw
 * para que se muevan y dibujen todos. Pista: usa un bucle for
 * para recorrer el array
 */
function update() {
  //Para cada enemigo del array...
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    //Mover el enemy
    enemy.y += enemy.speedY;
    //Chequear la colisión con el borde inferior
    if (enemy.y + enemy.h >= GAME_H) {
      enemy.y = GAME_H - enemy.h;
      enemy.speedY = enemy.speedY * -1;
    } else if (enemy.y <= 0) {
      //Chequear la colisión con el borde superior
      enemy.y = 0;
      enemy.speedY = enemy.speedY * -1;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, GAME_W, GAME_H);
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  }
}

setInterval(function () {
  draw();
  update();
}, 20);
