///<reference path="p5.global-mode.d.ts" />
var dodRate = 3.5;

function setup()
{
    var rammeStr = createVector(windowWidth, windowHeight);
    var ramme = createCanvas(rammeStr.x, rammeStr.y);
    ramme.position(0, 0);
    sliders() 

    // 0 = ikke smittet, 1 = smittet, 2 = helbredt, 3 = fool, 4 = død
    var spredningStr = createVector(400, 400);
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
    slidersValue()


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

