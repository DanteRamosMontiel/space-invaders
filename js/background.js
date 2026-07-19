const stars = [];

const colors = [
    "#FFFFFF",
    "#FFF8E7",
    "#FFE066",
    "#FFD1A3",
    "#BFDFFF",
    "#A8C8FF"
];

const background = document.querySelector(".bgcanvas");
const bgctx = background.getContext("2d");

function Star() {
    this.x = Math.random() * background.width;
    this.y = Math.random() * background.height;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.radius = Math.random() * 2 + 0.5;
    this.speed = Math.random() * 2 + 0.5;

    this.update = function () {
        this.y += this.speed;

        if (this.y > background.height + 10) {
            this.y = -10;
            this.x = Math.random() * background.width;
            this.radius = Math.random() * 2 + 0.5;
        }
    };

    this.draw = function () {
        bgctx.beginPath();
        bgctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        bgctx.fillStyle = this.color;
        bgctx.fill();
    };
}

export function initBackground() {
    background.width = window.innerWidth;
    background.height = window.innerHeight;

    stars.length = 0;

    for (let i = 0; i < 40; i++) {
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