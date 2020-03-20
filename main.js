///<reference path="p5.global-mode.d.ts" />

function setup()
{
    var spredningStr = createVector(400, 400);
    var spredning = createCanvas(spredningStr.x, spredningStr.y);
    spredning.position(0, 0);

    /*
    var grafStr = createCanvas(400, 400);
    var graf = createCanvas(grafStr.x, grafStr.y);
    graf.position(400, 0);
    */

    cirkelAntal = 100;
    cirkelListe=[new Cirkel(1, spredningStr)];
    for (i=0; i<cirkelAntal; i++)
    {
        cirkelListe.push(new Cirkel(0, spredningStr));
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

