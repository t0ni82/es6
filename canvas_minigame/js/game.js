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

function update() {
  //Mover el enemy
  enemies[0].y += enemies[0].speedY;
  //Chequear la colisión con el borde inferior
  if (enemies[0].y + enemies[0].h >= GAME_H) {
    enemies[0].y = GAME_H - enemies[0].h;
    enemies[0].speedY = enemies[0].speedY * -1;
  } else if (enemies[0].y <= 0) {
    //Chequear la colisión con el borde superior
    enemies[0].y = 0;
    enemies[0].speedY = enemies[0].speedY * -1;
  }
  //   console.log(enemy);
}

function draw() {
  ctx.clearRect(0, 0, GAME_W, GAME_H);
  ctx.fillStyle = enemies[0].color;
  ctx.fillRect(enemies[0].x, enemies[0].y, enemies[0].w, enemies[0].h);
}

setInterval(function () {
  draw();
  update();
}, 20);
