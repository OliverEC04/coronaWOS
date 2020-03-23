///<reference path="p5.global-mode.d.ts" />
var dodRate = 3.5;
var spredningPos;
var spredningStr;
var cirkelAntal = 100;
var normalAntal = cirkelAntal;
var smittetAntal = 0;
var helbredtAntal = 0;
var foolAntal = 0;
var dodAntal = 0;

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
                }
                if (cirkelListe[j].status == 0)
                {
                    cirkelListe[j].status = 1;
                }
            }
        }
    }

    for (i = 0; i < cirkelAntal; i++)
    {
        normalAntal = 0;
        smittetAntal = 0;
        helbredtAntal = 0;
        foolAntal = 0;
        dodAntal = 0;

        if (cirkelListe[i].status == 0)
        {
            normalAntal++;
        }
        if (cirkelListe[i].status == 1)
        {
            smittetAntal++;
        }
        if (cirkelListe[i].status == 2)
        {
            helbredtAntal++;
        }
        if (cirkelListe[i].status == 3)
        {
            foolAntal++;
        }
        if (cirkelListe[i].status == 4)
        {
            dodAntal++;
        }
    }

    console.log("normal: " + normalAntal);
    console.log("smittet: " + smittetAntal);
    console.log("helbredt: " + helbredtAntal);
    console.log("fool: " + foolAntal);
    console.log("dod: " + dodAntal);
}

