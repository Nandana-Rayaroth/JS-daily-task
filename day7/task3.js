
let box = document.getElementById("box");

function change(){
  let val1 = Math.floor(Math.random() * (225 - 0) + 0);
  let val2 = Math.floor(Math.random() * (225 - 0) + 0);
  let val3 = Math.floor(Math.random() * (225 - 0) + 0);
  box.style.border = `5px solid rgb(${val1},${val2},${val3})`;

}
box.addEventListener("dblclick", change)



// 