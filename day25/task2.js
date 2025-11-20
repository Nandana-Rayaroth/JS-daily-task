let imageContainer = document.getElementById("imageContainer");
let ImageOver = document.getElementById("image-silderlayover");
const PrBtn = document.getElementsByClassName("PrBtn")
let images = document.querySelectorAll(".image");
let Length = images.length
let index = 0

function Next(){
    index++;
    for(let i = 0; i < Length; i++){
         if (index === Length) {
           index = 0;
         }
        if(i !== index){
            images[i].style.display = "none"
        }
        else {
            images[i].style.display = "block"
        }
    }
}

function Preview(){
    index--;
    for(let i = Length-1; i >= 0; i--){
        if(index === -1){
            index = Length - 1
        }
        if(i !== index){
            images[i].style.display = "none"
        }
        else {
            images[i].style.display = "block"
        }
    }
    
}


function scrollAuto() {
  let auto =  setInterval(Next, 3000);
  ImageOver.addEventListener("mouseover", function () {
    clearInterval(auto);
  });
  ImageOver.addEventListener("mouseleave", function(){
    setInterval(Next, 3000)
  })
}
scrollAuto()





