"use strict";

let canvas = document.getElementsByTagName("canvas");



for (let drawSection of canvas) {
    let gamefield = drawSection.getContext("2d");
    let speed = 7;
    let snakeSpeed = 10;
    let gamerX = drawSection.width / 2;
    let gamerY = drawSection.height / 2;
    let spdY = 0;
    let spdX = 0;



    function game() {
        screenColor();
        drawPlayer();
        position();
        setTimeout(game, 1000 / speed)
    }
    document.addEventListener("keydown", keydown);

    function screenColor() {
        gamefield.fillStyle = "black";
        gamefield.fillRect(0, 0, drawSection.width, drawSection.height);
    }
    function drawPlayer() {
        gamefield.fillStyle = "red";
        gamefield.fillRect(gamerX, gamerY, 18, 18);
    }

    function position() {
        gamerY = gamerY + spdY;
        gamerX = gamerX + spdX;
    }
    function keydown(event) {
        if (event.keyCode == 38) {
            spdY = spdY - snakeSpeed
            spdX = spdX = 0;
        }
        if (event.keyCode == 40) {
            spdY = spdY + snakeSpeed
            spdX = spdX = 0;
        }
        if (event.keyCode == 37) {
            spdX = spdX - snakeSpeed
            spdY = spdY = 0;
        }
        if (event.keyCode == 39) {
            spdX = spdX + snakeSpeed
            spdY = spdY = 0;
        }
    }
    game();
}



