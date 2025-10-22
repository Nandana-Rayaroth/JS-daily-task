
let inputItem = document.getElementById("inputItem");
let inputValue = inputItem.value
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let visibility = true

btn.addEventListener("click", function(){
    if(visibility){
        result.textContent = inputItem.value;
        btn.textContent = "Hide"
        
    }
    else{
        result.textContent = ""
        btn.textContent = "Visible"
    }
    visibility = !visibility
    // inputItem.value = ""
})

// 