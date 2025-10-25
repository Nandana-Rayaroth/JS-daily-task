const imageInput = document.getElementById("imageInput")
const gallery = document.getElementById("gallery")
const emptyMessage = document.getElementById("emptyMessage")
const deleteBtn = document.getElementById("deleteBtn")

let images = []

imageInput.addEventListener("change", (event) => {
    const files = Array.from(event.target.files)

    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
            images.push(e.target.result)
            displayImages()
        }
        reader.readAsDataURL(file)
    })
    imageInput.value = ""
})

function displayImages() {
    gallery.innerHTML = ""
    deleteBtn.disabled = images.length === 0
    emptyMessage.style.display = images.length === 0 ? "block" : "none"

    images.forEach((src, index) => {
        const imgDiv = document.createElement("div")
        imgDiv.classList.add("image-item")

        const img = document.createElement("img")
        img.src = src

        imgDiv.appendChild(img)
        gallery.appendChild(imgDiv)

        imgDiv.addEventListener("click", () => {
            imgDiv.classList.toggle("seleted")
            updateDeleteButtonState()
        })
    })
}

function updateDeleteButtonState(){
    
}