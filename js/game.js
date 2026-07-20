import * as bg from "./background.js";
import * as player from "./player.js";
import * as shoot from "./shoot.js";

const ctx = document.querySelector(".playercanvas").getContext("2d");

bg.initBackground();
player.initPlayer();

function update() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    bg.updateBackground();
    player.updatePlayer();
    shoot.updateShoot();
}

function draw() {
    bg.drawBackground();
    player.drawPlayer();
}

function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();