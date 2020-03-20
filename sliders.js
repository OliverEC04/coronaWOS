///<reference path="p5.global-mode.d.ts" />

function setup()
{
    var grafStr = createCanvas(400, 400);
    var graf = createCanvas(grafStr.x, grafStr.y);
    graf.position(400, 0);
}

function draw()
{
    clear();
    frameRate(60);
    background(255);
}

