let ulcontainer = document.getElementById("ulcontainer");
let inpText = document.getElementById("inpText")
let addbtn = document.getElementById("addbtn");

function added(){
    let inpVal = inpText.value;
    if(inpVal.trim() === ""){
        alert("enter valid item")
        return
    }
    inpText.value = "";
    let list = document.createElement("li");
    list.textContent = inpVal;

    ulcontainer.appendChild(list);
}

addbtn.addEventListener("click", added)


// 