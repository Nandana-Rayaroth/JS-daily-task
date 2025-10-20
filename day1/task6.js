
let ulContainer = document.getElementById("ulContainer");

fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {

        data.results.forEach(people => {
            let items = document.createElement("li");
            // items.style.listStyleType = "none"
            items.innerHTML = `
                <img src=${people.picture.medium} />
                <h4> ${people.name.title} ${people.name.first} ${people.name.last}</h4>
                <h5> ${people.email}</h5>
            `
            ulContainer.appendChild(items)
        })
    })
    .catch(error => {
        console.error("Something wrong", error)
    })

let shuffleBtn = document.getElementById("shuffleBtn");
shuffleBtn.addEventListener("click", function() {
    window.location.reload()
})
    