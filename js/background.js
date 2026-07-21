const stars = [];

const colors = [
    "#FFFFFF",
    "#FFD23F",
    "#FFA630",
    "#FF6B6B",
    "#FF4DA6",
    "#FFF275"
];

const background = document.querySelector(".bgcanvas");
const bgctx = background.getContext("2d");

function Star() {
    this.x = Math.random() * background.width;
    this.y = Math.random() * background.height;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.radius = Math.random() * 1.7;
    this.speed = this.radius;

    this.update = function () {
        this.y += this.speed;

        if (this.y > background.height + 10) {
            this.y = -10;
            this.x = Math.random() * background.width;
            this.radius = Math.random() * 2;
            this.speed = this.radius;
        }
    };

    this.draw = function () {
        bgctx.save();
        bgctx.globalAlpha = 0.4 + (this.radius / 2.2) * 0.6;
        bgctx.shadowColor = this.color;
        bgctx.shadowBlur = this.radius * 2;
        bgctx.beginPath();
        bgctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        bgctx.fillStyle = this.color;
        bgctx.fill();
        bgctx.restore();
    };
}

export function initBackground() {
    background.width = window.innerWidth;
    background.height = window.innerHeight;

    stars.length = 0;

    for (let i = 0; i < 60; i++) {
        stars.push(new Star());
    }
}

export function updateBackground() {
    stars.forEach(star => star.update());
}

export function drawBackground() {
    bgctx.clearRect(0, 0, background.width, background.height);
    stars.forEach(star => star.draw());
}

window.addEventListener("resize", initBackground);