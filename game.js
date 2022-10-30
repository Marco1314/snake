"use strict";

let canvas = document.getElementsByTagName("canvas");



for (let drawSection of canvas) {
    let gamefield = drawSection.getContext("2d");
    let speed = 7;
    let tileCount = 20;
    let tilesize = 18;
    let snakeSpeed = 1;
    let gamerX = 10;
    let gamerY = 10;
    let spdX = 0;
    let spdY = 0;
    let appleX = 10;
    let appleY = 10;



    function game() {
        gamerX = gamerX + spdX;
        gamerY = gamerY + spdY;
        if (spdY < -snakeSpeed) {
            spdY = -snakeSpeed;
        } else if (spdY > snakeSpeed) {
            spdY = snakeSpeed;
        } else if (spdX > snakeSpeed) {
            spdX = snakeSpeed;
        } else if (spdX < -snakeSpeed) {
            spdX = -snakeSpeed;
        }

        screenColor();
        drawPlayer();
        drawApple();
        collisionCheck(gamerX, gamerY);




        setTimeout(game, 1000 / speed)
    }
    document.addEventListener("keydown", keydown);

    function screenColor() {
        gamefield.fillStyle = "black";
        gamefield.fillRect(0, 0, drawSection.width, drawSection.height);
    }

    function drawPlayer() {
        gamefield.fillStyle = "purple";
        gamefield.fillRect(gamerX * tileCount, gamerY * tileCount, tilesize, tilesize);
    }

    function drawApple() {
        gamefield.fillStyle = "red";
        gamefield.fillRect(appleX * tileCount, appleY * tileCount, tilesize, tilesize);
        console.log(appleX, appleY)
    }

    function collisionCheck(xc, yc) {
        if (appleX == xc && appleY == yc) {
            appleX = Math.floor(Math.random() * tileCount);
            appleY = Math.floor(Math.random() * tileCount);
            console.log(appleX, appleY)
        }
    }


    function keydown(event) {
        if (event.keyCode == 38) {
            spdY = spdY - snakeSpeed;
            spdX = spdX = 0;
        }
        if (event.keyCode == 40) {
            spdY = spdY + snakeSpeed;
            spdX = spdX = 0;

        }
        if (event.keyCode == 37) {
            spdX = spdX - snakeSpeed;
            spdY = spdY = 0;
        }
        if (event.keyCode == 39) {
            spdX = spdX + snakeSpeed;
            spdY = spdY = 0;

        }
    }
    game();
}

