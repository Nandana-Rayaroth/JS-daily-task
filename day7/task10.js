let ulContainer = document.getElementById("ulContainer");

function display(){
    ulContainer.style = "display: block"
}

window.addEventListener("keyup", function(e){
    let keypressed = e.key
    if(keypressed === 'A' && e.shiftKey === true){
        display()
    }
    
})