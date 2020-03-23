function sliders(){
text("Antal personer", 400, 100)
sliderAntalSyge = createSlider(0,100)
sliderAntalSyge.position(400,25)
sliderAntalAlle = createSlider(0, 500, 100)
sliderAntalAlle.position(400,5)
sliderFools = createSlider(0,100,2)
sliderFools.position(400,45)
}

function slidersValue(){
let antalSyge = sliderAntalSyge.value()
let antalAlle = sliderAntalAlle.value()
let antalFools = sliderFools.value()
}