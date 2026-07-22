const ctx = document.querySelector(".playercanvas").getContext("2d");

const sprite = new Image();
sprite.src = "./assets/ships/explosion.png";

const spriteSize = 128;
const totalFrames = 10;
const frameTime = 2; //a frame each 4 updates

const explosions = [];

export function createExplosion(x, y) {
    explosions.push({
        x,
        y,
        frame: 0,
        timer: 0
    });
}

export function drawExplosions() {
    for (let i = explosions.length - 1; i >= 0; i--) {

        const e = explosions[i];

        ctx.drawImage(
            sprite,
            e.frame * spriteSize,
            0,
            spriteSize,
            spriteSize,
            e.x - 29,
            e.y - 29,
            spriteSize,
            spriteSize
        );

        e.timer++;

        if (e.timer >= frameTime) {
            e.timer = 0;
            e.frame++;
        }

        if (e.frame >= totalFrames) {
            explosions.splice(i, 1);
        }
    }
}