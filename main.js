///<reference path="p5.global-mode.d.ts" />
var dodRate = 3.5;
var spredningPos;
var spredningStr;
var cirkelAntal = 100;
var raskeAntal = cirkelAntal;
var sygeAntal = 1;
var dodeAntal = 0;
var helbredtAntal = 0;

function setup()
{
    var rammeStr = createVector(windowWidth, windowHeight);
    var ramme = createCanvas(rammeStr.x, rammeStr.y);
    ramme.position(0, 0);
    
    spredningPos = createVector(0, 0);
    spredningStr = createVector(400, 400);
    
    cirkelListe=[new Cirkel(1, spredningStr)];
    for (i=0; i<cirkelAntal; i++)
    {
        cirkelListe.push(new Cirkel(0, spredningStr));
    }

    sliders() 
}

function draw()
{
    clear();
    frameRate(60);
    slidersValue()
    forklaring(spredningPos, spredningStr);

    //for (i; cirkelListe)

    for (i=0; i<cirkelAntal; i++)
    {
        cirkelListe[i].update();
        cirkelListe[i].draw();
        
        for (var j = 0; j < cirkelAntal; j++)
        {
            if(i != j && cirkelListe[i].overlap(cirkelListe[j]) && (cirkelListe[i].status == 1 || cirkelListe[j].status == 1))
            {
                if (cirkelListe[i].status == 0)
                {
                    cirkelListe[i].status = 1;
                    raskeAntal--;
                    sygeAntal++;
                    console.log(raskeAntal + " " + sygeAntal);
                }
                if (cirkelListe[j].status == 0)
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

