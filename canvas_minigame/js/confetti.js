//traer una referéncia al canvas
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

function Color() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }
  this.getRandomColor = function () {
    const color = {
      red: getRandomNumber(),
      green: getRandomNumber(),
      blue: getRandomNumber(),
      toStringRGB: function () {
        return `rgb(${this.red},${this.green},${this.blue})`;
      },
    };
    return color.toStringRGB();
  };
}

function Enemy(x, y, w, h, color, speedY, speedX) {
  this.x = x - w / 2;
  this.y = y - h / 2;
  this.w = w;
  this.h = h;
  this.color = color;
  this.speedY = speedY;
  this.speedX = speedX;
}
const enemies = [
  {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 1,
    speedX: 0,
  },
  {
    x: 260,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 2,
    speedX: 0,
  },
  {
    x: 380,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 0.5,
    speedX: 0,
  },
  {
    x: 450,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 1.8,
    speedX: 0,
  },
];
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}
let drawMode = false;
function movePlayer(e) {
  if (drawMode) {
    console.log("Move start!!!");
    const pos = getMousePos(canvas, e);
    const enemy = new Enemy(
      pos.x,
      pos.y,
      10,
      10,
      new Color().getRandomColor(),
      Math.random() * 4 - 2,
      Math.random() * 4 - 2
    );
    enemies.push(enemy);
    console.log(e.clientX);
    console.log(enemies);
  }
}
function stopPlayer() {
  console.log("Stop!!!");
  drawMode = false;
}

canvas.addEventListener("mousedown", () => {
  drawMode = true;
});
canvas.addEventListener("mousemove", movePlayer);
canvas.addEventListener("mouseup", stopPlayer);

function update() {
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    enemy.y += enemy.speedY;
    enemy.x += enemy.speedX;
    //Chequear la colisión con el borde inferior
    if (enemy.y + enemy.h >= GAME_H) {
      enemy.y = GAME_H - enemy.h;
      enemy.speedY = enemy.speedY * -1;
    } else if (enemy.y <= 0) {
      enemy.y = 0;
      enemy.speedY = enemy.speedY * -1;
    }
    if (enemy.x + enemy.w >= GAME_W) {
      enemy.x = GAME_W - enemy.w;
      enemy.speedX = enemy.speedX * -1;
    } else if (enemy.x <= 0) {
      enemy.x = 0;
      enemy.speedX = enemy.speedX * -1;
    }
  }
}

function draw() {
  //Limpiar el canvas
  ctx.clearRect(0, 0, GAME_W, GAME_H);
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  }
}

function step() {
  update();
  draw();
  window.requestAnimationFrame(step);
}
//paso inicial
step();
