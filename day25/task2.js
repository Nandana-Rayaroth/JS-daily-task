
let imageContainer = document.getElementById("imageContainer");
let ImageOver = document.getElementById("image-silderlayover");
let images = document.querySelectorAll(".image")
let total = images.length
let index = 1
let interval

let firstClone = images[0].cloneNode(true)
let lastClone = images[total - 1].cloneNode(true)

firstClone.id = "first-clone"
lastClone.id = "last-clone"

imageContainer.appendChild(firstClone)
imageContainer.prepend(lastClone)

let slideWidth = 350
imageContainer.style.transform = `translateX(-${slideWidth * index}px)`

function goToSlide(){
    imageContainer.style.transition = "transform 0.5s ease-in-out"
    imageContainer.style.transform = `translateX(-${slideWidth * index}px)`
}

function nextSlide(){
    index++
    goToSlide()
}

function prevSlide(){
    index--
    goToSlide()
}

imageContainer.addEventListener("transitionend", () => {
    let images = document.querySelectorAll(".image")

    if(images[index].id === "first-clone"){
        imageContainer.style.transition = "none"
        index = 1
        imageContainer.style.transform = `translateX(-${slideWidth * index}px)`
    }

    if(images[index].id === "last-clone"){
        imageContainer.style.transition = "none"
        index = total
        imageContainer.style.transform = `translateX(-${slideWidth * index}px)`
    }
})

function startAutoSlide(){
    interval = setInterval(nextSlide, 3000)
}

ImageOver.addEventListener("mouseover", () => clearInterval(interval))
ImageOver.addEventListener("mouseleave", startAutoSlide)

startAutoSlide()