const player = document.querySelector(".playercanvas");
const ctx = player.getContext("2d");

// --- Movement --- //

let velocity = 4;
let spriteSize = 70;

let posX = null;
let posY = null;

let right = false;
let left = false;
let up = false;
let down = false;

// --- Visuals --- //
let tiltAngle = 0;
let tiltStretch = 0;

const maxTiltAngle = 0.25;
const maxTiltStretch = 0.12;
const tiltEase = 0.12;

const sprite = new Image();
sprite.src = "./assets/ships/player-ship-active.png"


export function initPlayer() {
    player.width = window.innerWidth;
    player.height = window.innerHeight;

    const initialX = window.innerWidth / 2;
    const initialY = (window.innerHeight / 4) * 3.4;

    posX = initialX;
    posY = initialY;

    sprite.onload = () => {
        ctx.drawImage(sprite, initialX, initialY, spriteSize, spriteSize);
    };
}

export function drawPlayer(){
    ctx.clearRect(0, 0, player.width, player.height);

    const centerX = posX + spriteSize / 2;
    const centerY = posY + spriteSize / 2;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(tiltAngle);
    ctx.scale(1 - tiltStretch, 1 + tiltStretch * 0.5);
    ctx.drawImage(sprite, -spriteSize / 2, -spriteSize / 2, spriteSize, spriteSize);
    ctx.restore();
}

export function updatePlayer(){

    // --- Movement --- //
    if(right && !left){
        if (posX + velocity > player.width - spriteSize) return;
        posX += velocity;
    }else if(left && !right){
        if (posX - velocity < 0 ) return;
        posX -= velocity;
    }

    if(up && !down){
        if (posY - velocity < player.height / 2) return;
        posY -= velocity;
    }else if(down && !up){
        if (posY + velocity > player.height - spriteSize) return;
        posY += velocity;
    }

    // --- Visuals --- //
    let targetAngle = 0;
    if(right && !left){
        targetAngle = maxTiltAngle;
    }else if(left && !right){
        targetAngle = -maxTiltAngle;
    }

    let targetStretch = 0;
    if(up && !down){
        targetStretch = maxTiltStretch;
    }else if(down && !up){
        targetStretch = -maxTiltStretch;
    }

    tiltAngle += (targetAngle - tiltAngle) * tiltEase;
    tiltStretch += (targetStretch - tiltStretch) * tiltEase;
}

window.addEventListener("resize", () => {
    player.width = window.innerWidth;
    player.height = window.innerHeight;

    if(posX + spriteSize > player.width){
        posX = player.width - spriteSize;
    }
});

document.addEventListener("keydown", (k) => {
    if(k.code === "KeyD" || k.code === "ArrowRight"){
        right = true;
    }else if(k.code === "KeyA" || k.code === "ArrowLeft"){
        left = true;
    }else if(k.code === "KeyW" || k.code === "ArrowUp"){
        up = true;
    }else if(k.code === "KeyS" || k.code === "ArrowDown"){
        down = true;
    }
});

document.addEventListener("keyup", (k) => {
    if(k.code === "KeyD" || k.code === "ArrowRight"){
        right = false;
    }else if(k.code === "KeyA" || k.code === "ArrowLeft"){
        left = false;
    }else if(k.code === "KeyW" || k.code === "ArrowUp"){
        up = false;
    }else if(k.code === "KeyS" || k.code === "ArrowDown"){
        down = false;
    }
});