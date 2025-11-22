
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

document.querySelectorAll(".item").forEach((item) => {
  const uparrow = item.querySelector(".uparrow");
  const subItemUl = item.querySelector(".subItemUl");
  const downarrow = item.querySelector(".downarrow");
  uparrow.addEventListener("click", function () {
    subItemUl.style.display = "block";
    uparrow.style.display = "none";
    downarrow.style.display = "inline-block";
  });
  downarrow.addEventListener("click", function () {
    subItemUl.style.display = "none";
    uparrow.style.display = "inline-block";
    downarrow.style.display = "none";
  });
});