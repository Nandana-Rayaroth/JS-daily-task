const TextContainer = document.getElementById("scroll")
const progress = document.getElementById("progress")
window.addEventListener("scroll", function(){
    const scrollAtY = window.scrollY
    const scrollHeight = document.body.scrollHeight-window.innerHeight
    const percentage = (scrollAtY/scrollHeight)*100
    progress.style.width=percentage+"%"
    progress.style.color="white"
    if(percentage>100){
        progress.textContent="100%"
    }else{
        progress.textContent="Loading "+Math.floor(percentage)+"%"
    }
})