///<reference path="p5.global-mode.d.ts" />

function setup()
    {
        var window = createVector(800, 600);
        createCanvas(window.x, window.y);
        cirkelAntal = 100;
        cirkelListe=[];
        for (i=0; i<cirkelAntal; i++)
        {
            cirkelListe.push(new Cirkel(0, window));
        }
    }
  
function draw()
    {
        background(255);
        frameRate(60);

        for (i=0; i<cirkelAntal; i++)
        {
            cirkelListe[i].update();
            cirkelListe[i].draw();
        }
    }
