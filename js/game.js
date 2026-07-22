import * as bg from "./background.js";
import * as player from "./player.js";
import * as shoot from "./shoot.js";
import * as enemy from "./enemy.js";
import * as explosion from "./explosion.js"

const ctx = document.querySelector(".playercanvas").getContext("2d");

bg.initBackground();
player.initPlayer();
enemy.initEnemy();

function update() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    bg.updateBackground();
    player.updatePlayer();
    shoot.updateShoot();
    enemy.updateEnemy();
}

function draw() {
    bg.drawBackground();
    player.drawPlayer();
    enemy.drawEnemy();
    explosion.drawExplosions();
}

function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});