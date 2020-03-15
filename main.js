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
    }
  
this.distance = function(other)
    {
        afstand = dist(this.x, this.y, other.x, other.y);
        if (afstand > (Cirkel.radius + other.radius)) 
        {
            return true;
        }
            else
            {
                return false;
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
