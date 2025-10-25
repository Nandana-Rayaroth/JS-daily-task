const inputKey = document.getElementById("inputKey")
const tableContainer = document.getElementById("tableContainer");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
let arr = []

inputKey.addEventListener("keyup", function(e){
    console.log(e)

    let items = {
        key : e.key,
        code : e.code,
        timeStamp : e.timeStamp
    }
    arr.push(items)

    if(arr.length > 10){
        arr.shift()
    }
    tableSetter()

})

function tableSetter() {
    inputKey.value = ""
    tableBody.innerHTML = ""
    arr.forEach(element => {        
        let trow = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        
        td1.style.border = "1px solid black"
        td2.style.border = "1px solid black"
        td3.style.border = "1px solid black"

        td1.textContent = element.key
        td2.textContent = element.code
        td3.textContent = element.timeStamp
        
        trow.appendChild(td1)
        trow.appendChild(td2)
        trow.appendChild(td3)
        tableBody.appendChild(trow)
    })
}

//