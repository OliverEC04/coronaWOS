///<reference path="p5.global-mode.d.ts" />

var canvas;

function setup()
{
    var window = createVector(800, 600);
    canvas = createCanvas(window.x, window.y);
    canvas.position(0, 0);
    cirkelAntal = 100;
    cirkelListe=[new Cirkel(1, window)];
    for (i=0; i<cirkelAntal; i++)
    {
        cirkelListe.push(new Cirkel(0, window));
    }
}

function draw()
{
    clear();
    frameRate(60);

    for (i=0; i<cirkelAntal; i++)
    {
        cirkelListe[i].update();
        cirkelListe[i].draw();
        
        for (var j = 0; j < cirkelAntal; j++)
        {
            if(i != j && cirkelListe[i].overlap(cirkelListe[j]) && (cirkelListe[i].status == 1 || cirkelListe[j].status == 1))
            {
                cirkelListe[i].status = 1;
                cirkelListe[j].status = 1;
            }
        }
    }
}

