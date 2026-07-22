import {checkColision} from "./enemy.js"

const shots = [];
let ctx = null;

const bullet = new Image();
bullet.src = "./assets/ships/bullet.png"

function Shot(x,y){
    this.x = x;
    this.y = y;
    this.color = "red";
    this.width = 5;
    this.height = 8;
    this.velocity = 6;
    this.impact = false;
}

Shot.prototype.draw = function(){
    ctx.drawImage(bullet, this.x, this.y, this.width, this.height); 
};

Shot.prototype.update = function(){
    this.draw();
    this.y -= this.velocity;
    if(checkColision(this.x, this.y)){
        this.impact = true;
    }
};

export function createShoot(playerX, playerY, context){
    ctx = context;
    shots.push(new Shot(playerX + 34, playerY + 2));
}

export function updateShoot(){
    //when bullets are no longer visible, they are deleted
    for(let i = shots.length - 1; i >= 0; i--){
        shots[i].update();
        if(shots[i].y + 8 < 0 || shots[i].impact){
            shots.splice(i, 1);
        }
    }
}