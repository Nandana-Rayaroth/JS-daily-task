
let inpuName =document.getElementById("inpuName")
let inputValue = (document.getElementById("inpuName"))
let result = document.getElementById("result");

console.log(inputValue.value)
let str = "Hello ";

addEventListener("focusout", function() {
    result.textContent = str.concat(inputValue.value)
})

    
// function display() {
//     result.textContent = str.concat(inputValue.value)
// }