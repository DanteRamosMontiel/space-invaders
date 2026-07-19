import * as bg from "./background.js";
import * as player from "./player.js";

bg.initBackground();
player.initPlayer();

function update() {
    bg.updateBackground();
    player.updatePlayer();
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