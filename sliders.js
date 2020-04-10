var antalSyge;
var antalAlle;
var antalFools;

function sliders(){
    pos = createVector(600, 0);

sliderAntalSyge = createSlider(0,100)
sliderAntalSyge.position(pos.x,75)
sliderAntalAlle = createSlider(0, 1000, 1000)
sliderAntalAlle.position(pos.x,20)
sliderFools = createSlider(0,100,2)
sliderFools.position(pos.x,130)
buttonGodHyg = createButton('God hygiene');
buttonGodHyg.position(pos.x, 160);
buttonGodHyg.mousePressed("folk smitter 0,8 val.");
buttonGodHyg.size(100)
buttonMellemHyg = createButton('Mellem hygiene');
buttonMellemHyg.position(pos.x , 200);
buttonMellemHyg.mousePressed("folk smitter 1,8 val.");
buttonMellemHyg.size(100)
buttonDarligHyg = createButton('Darlig hygiene');
buttonDarligHyg.position(pos.x, 240);
buttonDarligHyg.mousePressed("folk smitter 2,8 val.");
buttonDarligHyg.size(100)
}

function slidersValue()
{
    pos = createVector(600, 0);
fill(0,0,0);
text("Antal personer", pos.x + 50, 15);
text("Antal syge", pos.x + 50, 70)
text("Antal fools", pos.x + 50, 125)
antalSyge = sliderAntalSyge.value();
antalAlle = sliderAntalAlle.value();
antalFools = sliderFools.value();

//Alle bliver inde og holder meget god hygien, De fleste bliver inde og god hygiene, Folk bevæger sig lidt rund, som vi gør nu og tænker ikke så meget på hygiene
}
