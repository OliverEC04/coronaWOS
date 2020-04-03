
function sliders(){
sliderAntalSyge = createSlider(0,100)
sliderAntalSyge.position(400,75)
sliderAntalAlle = createSlider(0, 500, 100)
sliderAntalAlle.position(400,20)
sliderFools = createSlider(0,100,2)
sliderFools.position(400,130)
buttonGodHyg = createButton('Alle bliver inde og holder meget god hygiene');
buttonGodHyg.position(400, 160);
buttonGodHyg.mousePressed("folk smitter 0,8 val.");
buttonGodHyg.size(100)
buttonMellemHyg = createButton(' De fleste bliver inde og god hygiene');
buttonMellemHyg.position(430, 160);
buttonMellemHyg.mousePressed("folk smitter 1,8 val.");
buttonMellemHyg.size(100)
buttonDarligHyg = createButton('Folk bevæger sig lidt rund, som vi gør nu og tænker ikke så meget på hygiene');
buttonDarligHyg.position(460, 160);
buttonDarligHyg.mousePressed("folk smitter 2,8 val.");
buttonDarligHyg.size(100)
}
function slidersValue()
{
fill(0,0,0);
text("Antal personer", 400, 15);
text("Antal syge", 400, 70)
text("Antal fools", 400, 125)
let antalSyge = sliderAntalSyge.value();
let antalAlle = sliderAntalAlle.value();
let antalFools = sliderFools.value();
}