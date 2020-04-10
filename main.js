///<reference path="p5.global-mode.d.ts" />
var dodRate = 3.5;

var spredningPos;
var spredningStr;

var cirkelAntal;
var antalSyge = 1;

var normalAntal = cirkelAntal;
var normalData = [];
var normalFarve;

var smittetAntal = 0;
var smittetData = [];
var smittetFarve;

var helbredtAntal = 0;
var helbredtData = [];
var helbredtFarve;

var foolAntal = 0;
var foolData = [];
var foolFarve;

var dodAntal = 0;
var dodData = [];
var dodFarve;

var graf;
var tid = 0;

function setup()
{
    var rammeStr = createVector(windowWidth, windowHeight);
    var ramme = createCanvas(rammeStr.x, rammeStr.y);
    ramme.position(0, 0);
    
    spredningPos = createVector(0, 0);
    spredningStr = createVector(600, 600);

    sliders();
    slidersValue();
    cirkelAntal = antalAlle - antalSyge;

    normalFarve = color(0, 0, 255);
    smittetFarve = color(255, 0, 0);
    helbredtFarve = color(0, 255, 0);
    foolFarve = color(255, 150, 0);
    dodFarve = color(0);
    
    cirkelListe=[];
    for (i=0; i<cirkelAntal; i++)
    {
        cirkelListe.push(new Cirkel(0, spredningStr));
    }

    for (i=0; i<antalSyge; i++)
    {
        cirkelListe.push(new Cirkel(1, spredningStr));
    }

    resetKnap = new Reset(createVector(100, 40), createVector(spredningPos.x + spredningStr.x, spredningPos.y + 400));

    normalGraf = new Graf([0], [0], 1, cirkelAntal, spredningStr, spredningPos, normalFarve);
    smittetGraf = new Graf([0], [0], 1, cirkelAntal, spredningStr, spredningPos, smittetFarve);
    helbredtGraf = new Graf([0], [0], 1, cirkelAntal, spredningStr, spredningPos, helbredtFarve);
    dodGraf = new Graf([0], [0], 1, cirkelAntal, spredningStr, spredningPos, dodFarve);
}

function draw()
{
    clear();
    frameRate(60);
    slidersValue()
    resetKnap.drawButton();
    forklaring(createVector(spredningPos.x, spredningPos.y + 10), spredningStr);

    tid++;

    normalGraf.xData.push(tid);
    normalGraf.xMax = tid;
    normalGraf.yData = normalData;
    normalGraf.update();
    normalGraf.draw();

    smittetGraf.xData.push(tid);
    smittetGraf.xMax = tid;
    smittetGraf.yData = smittetData;
    smittetGraf.update();
    smittetGraf.draw();

    helbredtGraf.xData.push(tid);
    helbredtGraf.xMax = tid;
    helbredtGraf.yData = helbredtData;
    helbredtGraf.update();
    helbredtGraf.draw();

    dodGraf.xData.push(tid);
    dodGraf.xMax = tid;
    dodGraf.yData = dodData;
    dodGraf.update();
    dodGraf.draw();

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

    normalAntal = 0;
    smittetAntal = antalSyge;
    helbredtAntal = 0;
    foolAntal = 0;
    dodAntal = 0;

    for (i = 0; i < cirkelAntal; i++)
    {
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

    normalData.push(normalAntal);
    smittetData.push(smittetAntal);
    helbredtData.push(helbredtAntal);
    foolData.push(foolAntal);
    dodData.push(dodAntal);
}
