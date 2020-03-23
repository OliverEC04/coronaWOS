
function sliders(){
sliderAntalSyge = createSlider(0,100)
sliderAntalSyge.position(400,75)
sliderAntalAlle = createSlider(0, 500, 100)
sliderAntalAlle.position(400,20)
sliderFools = createSlider(0,100,2)
sliderFools.position(400,130)
buttonGodHyg = createButton('God Hygiejne');
buttonGodHyg.position(400, 160);
buttonGodHyg.mousePressed("hvor meget folk smitter");
buttonGodHyg.size(100)

function slidersValue(){
fill(0,0,0);
text("Antal personer", 400, 15);
text("Antal syge", 400, 70)
text("Antal fools", 400, 125)
let antalSyge = sliderAntalSyge.value();
let antalAlle = sliderAntalAlle.value();
let antalFools = sliderFools.value();
}