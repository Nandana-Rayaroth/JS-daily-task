
let Original = {
    user_id : 1,
    user_name : "Archana"
}


function updateUser(user) {
    let deppend = user
    deppend.lastActive = "5 mints ago"
    console.log(deppend)

    let indeppend = JSON.parse(JSON.stringify(user))
    indeppend.lastActive = "30 mints ago"
    console.log(indeppend)
}

updateUser(Original)
console.log(Original)

