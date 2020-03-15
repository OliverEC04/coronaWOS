///<reference path="p5.global-mode.d.ts" />

function setup()
    {
        var window = createVector(800, 600);
        createCanvas(window.x, window.y);
        cirkelAntal = 100;
        cirkelListe=[new Cirkel(1, window)];
        for (i=0; i<cirkelAntal; i++)
        {
            cirkelListe.push(new Cirkel(0, window));
        }

        this.distance = function()
        {
            distance = sqrt((x2-x1)**2 + (y2-y1)**2); 
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
