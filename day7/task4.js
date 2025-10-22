let pressedKey = document.getElementById("pressedKey");
let tableContainer = document.getElementById("tableContainer");

let i = 0;
// pressedKey.addEventListener("keyup", function(e) {
//     let keyVal = pressedKey.value
    
//     if(i < 10) {
//       let trow = document.createElement("tr");
//       trow.textContent = `Pressed ${e.key}`;
//       tableContainer.appendChild(trow);
//       i=i+1
//     }
// })
  let trow1 = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");

  th1.textContent = "Pressed";
  th2.textContent = "Code";
  th3.textContent = "KeyCode";

  trow1.style = `1px solid border`
  th1.style.border = `1px solid border`
  th2.style.border = `1px solid border`
  th3.style.border = `1px solid border`

  trow1.appendChild(th1);
  trow1.appendChild(th2);
  trow1.appendChild(th3);
  tableContainer.appendChild(trow1);

pressedKey.addEventListener("keyup", function(e){
  let keyVal = pressedKey.value

  if(i < 10){
    let trow2 = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    td1.textContent = `pressed1 ${e.code}`
    td2.textContent = `pressed2 ${e.key}`
    td3.textContent = `pressed3 `

    trow2.appendChild(td1)
    trow2.appendChild(td2)
    trow2.appendChild(td3)
    tableContainer.appendChild(trow2);    
    i=i+1
  }

  
})