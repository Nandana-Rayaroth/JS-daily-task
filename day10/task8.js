const hiddenItem = document.getElementById("hiddenItem");
const hiddenItem2 = document.getElementById("hiddenItem2")

let flag = false
function Visibility(){
    hiddenItem.style = "display: list-item;";
    hiddenItem2.style = "display: list-item"
}

function hidde(){
    hiddenItem.style = "display: none"
    hiddenItem2.style = "display: none"
}

window.addEventListener("keyup", function(e){
    let pressed = e.key
    if(flag){
        if (pressed === "a" && e.shiftKey === true) {
            Visibility();
        }
    }
    else{
        hidde()
    }
    flag  = !flag
})

// 

