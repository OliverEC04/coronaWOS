///<reference path="p5.global-mode.d.ts" />

function setup()
{
    var window = createVector(800, 600);
    createCanvas(window.x, window.y);
    canvas.parent('can1');
    cirkelAntal = 100;
    syge = []
    cirkelListe=[new Cirkel(1, window)];
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
        
        for (var j = 0; j < cirkelAntal; j++)
        {
            if(i != j && cirkelListe[i].overlap(cirkelListe[j]) && (cirkelListe[i].status == 1 || cirkelListe[j].status == 1))
            {
                cirkelListe[i].status = 1;
                cirkelListe[j].status = 1;
            }
        }
    }

    for (syge = 0; syge < cirkelAntal; syge++)
    {
        if(cirkelListe[syge].status == 1)
        {
            syge++
        }
    }
}
