
const dynamic = document.getElementById("dynamic");
const menuiconDefault = document.getElementById("menuiconDefault");
const StaticSection = document.getElementById("StaticSection");
const menuiconContainer = document.getElementById("menuiconContainer");

menuiconDefault.addEventListener("click", function(){
    dynamic.style.display = "block"
    StaticSection.style.display = "none"
})

menuiconContainer.addEventListener("click", function(){
    StaticSection.style.display = "block"
    dynamic.style.display = "none"
})
