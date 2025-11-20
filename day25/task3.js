// let inptText = document.getElementById("inptText")
// let Count = document.getElementById("Count")
// let counter = 0
// inptText.addEventListener("input", function(){
//    let length = inptText.value.length+1
//     if(length > 20){
//         Count.style.color = "red"
//     }else{
//         Count.style.color = "black"
//     }
//     Count.textContent = length
// })
var inptText = document.getElementById("inptText");
var Count = document.getElementById("Count");
var counter = 0;
inptText.addEventListener("input", function () {
    var length = inptText.value.length + 1;
    if (length > 20) {
        Count.style.color = "red";
    }
    else {
        Count.style.color = "black";
    }
    Count.textContent = "Count : " + (length.toString());
});
