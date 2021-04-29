import {InputHandler} from "./inputs/inputHandler.js";

console.log(InputHandler)

var view = document.getElementById('view');
var ctx = view.getContext('2d');
view.width = 800;
view.height = 500;

const player = {
    x: 200,
    y: 300,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "assets/chewie.png"; /* check out this character and more at http://untamed.wild-refuge.net/rmxpresources.php?characters */
const background = new Image();
background.src = "assets/background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e) {    
    player.moving = true;
});
window.addEventListener("keyup", function(e) {
    player.moving = false;
});

function movePlayer() {
    if (InputHandler.keyDown(InputHandler.Keys.UP) && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (InputHandler.keyDown(InputHandler.Keys.LEFT) && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (InputHandler.keyDown(InputHandler.Keys.DOWN) && player.y < view.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (InputHandler.keyDown(InputHandler.Keys.RIGHT) && player.x < view.width - player.width) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
}
function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, view.width, view.height);
        ctx.drawImage(background, 0, 0, view.width, view.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        handlePlayerFrame();
    }
}
startAnimating(15); 



