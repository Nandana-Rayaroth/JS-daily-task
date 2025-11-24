

const closeIcon = document.getElementById("closeIcon");
const modalContainer = document.querySelector(".modal-container");
const modalWrapper = document.querySelector(".modal-wrapper");

// closeIcon.addEventListener("click", function(){
//     modalContainer.style.display = "none"
// })

window.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        modalContainer.style.display = "none"
    }
})

window.addEventListener("click", (event) => {
    if(!modalContainer.contains(event.target) || event.target === closeIcon){
        modalContainer.style.display = "none"
    }
})