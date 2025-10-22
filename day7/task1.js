
let box = document.getElementById("box")

box.addEventListener("mouseover", function(){
    let val1 = Math.floor(Math.random() * (225 - 0) + 0)
    let val2 = Math.floor(Math.random() * (225 - 0) + 0)
    let val3 = Math.floor(Math.random() * (225 - 0) + 0)
    box.style = `width: 25%; height: 25%; border: 1px solid black; background-color: rgb(${val1},${val2},${val3})`;
})

box.addEventListener("mouseleave", function(){
    box.style = `width: 25%; height: 25%; border: 1px solid black;`;
})

// 