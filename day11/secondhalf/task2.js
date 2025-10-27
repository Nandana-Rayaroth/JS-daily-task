
const Item1 = document.getElementById("item1")
const item1Details = document.getElementById("item1Details")
const Item2 = document.getElementById("item2")
const item2Details = document.getElementById("item2Details")
const Item3 = document.getElementById("item3")
const item3Details = document.getElementById("item3Details");

function Visibility(hidenItem, visibleItem) {          
  visibleItem.textContent = hidenItem.textContent;
  visibleItem.style = "background-color: black; color: white; padding: 4px; width: 200px";
}

Item1.addEventListener("mouseover" ,function(){
    Visibility(Item1, item1Details)
})

Item2.addEventListener("mouseover", function(){
    Visibility(Item2, item2Details)
})

Item3.addEventListener("mouseover", function(){
    Visibility(Item3, item3Details)
})