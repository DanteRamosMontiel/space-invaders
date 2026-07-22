import { createExplosion } from "./explosion.js"
const ctx = document.querySelector(".playercanvas").getContext("2d");

const sprite = new Image();
sprite.src = "./assets/ships/enemy-ship-1.png"

function Enemy() {
    this.x = Math.random() * window.innerWidth;
    this.y = window.innerHeight / 8;
    this.dead = false;
    this.size = 70;
}

const enemies = [];



for (let i = 0; i < 6; i++) {
    enemies.push(new Enemy());
}

export function checkColision(x, y) {
    for (const e of enemies) {
        if (y <= e.y + 15 && x >= e.x && x <= e.x + e.size) {
            e.dead = true;
            createExplosion(e.x, e.y);
            return true;
        }
    }

    return false;
}

export function initEnemy() {
    sprite.onload = () => {
        enemies.forEach((e) => {
            ctx.drawImage(sprite, e.x, e.y, e.size, e.size);
        });
    };
}

export function updateEnemy() {
    for (let i = enemies.length - 1; i >= 0; i--) {
        if (enemies[i].dead) {
            enemies.splice(i, 1);
        }
    }
}

export function drawEnemy() {
    enemies.forEach((e) => {
        ctx.drawImage(sprite, e.x, e.y, e.size, e.size);
    });
}