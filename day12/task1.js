let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let addresInput = document.getElementById("addresInput");
let gender = document.getElementById("gender");
let exam = document.getElementById("exam");
let subject = document.getElementById("subject");
let clearbtn = document.getElementById("clearbtn");
let submtbtn = document.getElementById("submtbtn");
let tooltip = document.getElementById("tooltip");

function itemFill(){
    let name = nameInput.value
    let age = ageInput.value
    let address = addresInput.value
    let gend = gender.value
    let exm = exam.value
    let sub = subject.value
    
    if(name === "" || age === "" || address === "" || gend === "" || exm === "" || sub === "" ){
        alert("Please fill all fileds")
        tooltip.textContent = "Please fill all fields"
        tooltip.style = "backgroundColor: black; text: white"
        return false
    }else return true
}

function clearFunction(){
    let flag = itemFill()
    if(!flag) return
    else{
        nameInput.textContent = ""
        ageInput.textContent = ""
        addresInput.textContent = ""
        gender.textContent = ""
        exam.textContent = ""
        subject.textContent = ""
    }
}

clearbtn.addEventListener("click",clearFunction())

