const shots = [];
let ctx = null;

const bullet = new Image();
bullet.src = "./assets/ships/bullet.png"

function Shot(x,y){
    this.x = x;
    this.y = y;
    this.color = "red";
    this.radius = 2;
    this.velocity = 6;

    this.draw = function(){
        ctx.drawImage(bullet, this.x, this.y, 3, 5);
    }

    this.update = function(){
        this.draw();
        this.y -= this.velocity;
    }
}

export function createShoot(playerX, playerY, context){
    ctx = context;
    shots.push(new Shot(playerX + 34, playerY + 2));
}

export function updateShoot(){
    shots.forEach((s) => {
        s.update();
    });
}