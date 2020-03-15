///<reference path="p5.global-mode.d.ts" />

function setup()
    {
        var window = createVector(800, 600);
        createCanvas(window.x, window.y);
        cirkelListe=[]
        for (i=0; i<cirkelAntal; i++)
        {
            cirkelListe.push(new Cirkel(0));
        }
    }
  
function draw()
    {
        

    }
