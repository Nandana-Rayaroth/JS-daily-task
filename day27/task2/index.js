
const Action = document.getElementById("Action");
const Thriller = document.getElementById("Thriller")
const Horror = document.getElementById("Horror")
const Comedy = document.getElementById("Comedy")

const ActionMovieContainer = document.getElementById("ActionMovieContainer");
const ThrillerMovieContainer = document.getElementById("ThrillerMovieContainer")
const HorrorMovieContainer = document.getElementById("HorrorMovieContainer");
const ComedyMovieContainer = document.getElementById("ComedyMovieContainer");

let navItem = [Action, Thriller, Horror, Comedy]
let movieSection = [
  ActionMovieContainer,
  ThrillerMovieContainer,
  HorrorMovieContainer,
  ComedyMovieContainer,
];

function ActiveSelector(Selector){
    for(let i of navItem){
        if(i === Selector){
            Selector.classList.add("active")
        }else {
            i.classList.remove("active")
        }
    }
}
function ActiveMovie(Section){
    for(let i of movieSection){
        if(i === Section){
            Section.style.display = "block"
        }else i.style.display = "none"
    }
}

Action.addEventListener("click", function(){
    ActiveSelector(Action)
    ActiveMovie(ActionMovieContainer)
})

Thriller.addEventListener("click", function(){
    ActiveSelector(Thriller)
    ActiveMovie(ThrillerMovieContainer)
})

Horror.addEventListener("click", function(){
    ActiveSelector(Horror)
    ActiveMovie(HorrorMovieContainer)
})

Comedy.addEventListener("click", function(){
    ActiveSelector(Comedy)
    ActiveMovie(ComedyMovieContainer)
})


