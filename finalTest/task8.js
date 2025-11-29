let Input = document.getElementById("Input")
let InpVal 
let OveralText = document.querySelector(".OveralText");
let items = document.querySelectorAll(".items");
Input.addEventListener("keyup", () => {
    InpVal = Input.value
    for(let i = 0; i < items.length; i++){
        console.log(items`${i}`.value)
    }
})
