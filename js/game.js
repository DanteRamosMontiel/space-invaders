import * as bg from "./background.js";

bg.initBackground();

function update() {
    bg.updateBackground();
}

function draw() {
    bg.drawBackground();
}

function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();