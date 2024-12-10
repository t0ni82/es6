//Traer una referéncia del
//objeto (elemento)canvas
const canvas = document.getElementById("mycanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

//Crear los eventos para detectar el click del ratón
canvas.addEventListener("mousedown", function () {
  player.isMoving = true;
});
canvas.addEventListener("mouseup", function () {
  player.isMoving = false;
});
canvas.addEventListener("touchstart", function () {
  player.isMoving = true;
});
canvas.addEventListener("touchend", function () {
  player.isMoving = false;
});

//Crear el player
const player = {
  x: 10,
  y: GAME_H / 2 - 20,
  w: 40,
  h: 40,
  color: "green",
  speedX: 1,
  isMoving: false,
};

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
  {
    x: 460,
    y: 100,
    w: 30,
    h: 30,
    color: "red",
    speedY: 2,
  },
];
/**
 * Añadir enemigos hasta 5 y modificar el update y el draw
 * para que se muevan y dibujen todos. Pista: usa un bucle for
 * para recorrer el array
 */
function update() {
  //Mover el player
  if (player.isMoving) {
    player.x += player.speedX;
  }
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
  //Limpia el canvas
  ctx.clearRect(0, 0, GAME_W, GAME_H);

  //Dibujar el player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Dibuja los enemigos del array
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
