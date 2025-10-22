
let displayWidth = document.getElementById("displayWidth");
let displayHeight = document.getElementById("displayHeight");


window.addEventListener("resize", function(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    displayHeight.textContent = `Height : ${height}`
    displayWidth.textContent = `Width : ${width}`
})

// 