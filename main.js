///<reference path="../p5.global-mode.d.ts" />

let lemBillede = 0;

function preload()
{
    //lemBillede = loadImage('C:/Users/olive/Google Drive/Skole/18xaR/Programmering/P5/accelerationLem/car.png');
}

function setup()
    {
        var window = createVector(800, 600);
        createCanvas(window.x, window.y);

        lem = new Projektil(1, 50, createVector(1, 200), lemBillede, createVector(4, 2), window.x);
    }
  
function draw()
    {
        background(200, 200, 200);

        lem.update();

        lem.draw();
    }
