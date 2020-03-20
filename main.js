///<reference path="p5.global-mode.d.ts" />

function setup()
{
    var spredningStr = createVector(400, 400);
    var spredning = createCanvas(spredningStr.x, spredningStr.y);
    spredning.position(0, 0);

    /*
    var grafStr = createCanvas(400, 400);
    var graf = createCanvas(graf.x, spredningStr.y);
    spredning.position(0, 0);
    */

    cirkelAntal = 100;
    raskeAntal = cirkelAntal;
    sygeAntal = 1;
    dodeAntal = 0;
    helbredtAntal = 0;
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
                if (cirkelListe[i].status != 1)
                {
                    cirkelListe[i].status = 1;
                    raskeAntal--;
                    sygeAntal++;
                    console.log(raskeAntal + " " + sygeAntal);
                }
                if (cirkelListe[j].status != 1)
                {
                    cirkelListe[j].status = 1;
                    raskeAntal--;
                    sygeAntal++;
                    console.log(raskeAntal + " " + sygeAntal);
                }
            }
        }
    }
}

