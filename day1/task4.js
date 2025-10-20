
let InputText = document.getElementById("InputText");
let Result = document.getElementById("Result");
let SubmitBtn = document.getElementById("submitbtn");
let togglebtn = document.getElementById("togglebtn");

SubmitBtn.addEventListener("click", function() {
    let UserText = InputText.value
    console.log(UserText)

    let renderList = document.createElement("li")

    renderList.addEventListener("click", function() {
        renderList.style.textDecoration = "line-through"
    })

    renderList.textContent = UserText;
    Result.appendChild(renderList)

    // localStorage.setItem('userData',UserText)
})