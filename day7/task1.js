
let box = document.getElementById("box")

box.addEventListener("mouseover", function(){
    let val1 = Math.floor(Math.random() * (225 - 0) + 0)
    let val2 = Math.floor(Math.random() * (225 - 0) + 0)
    let val3 = Math.floor(Math.random() * (225 - 0) + 0)
    box.style.backgroundColor = `rgb(${val1},${val2},${val3})`;
})

box.addEventListener("mouseleave", function(){
    box.style.backgroundColor = `white`;
})

// 