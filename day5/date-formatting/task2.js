
let kolkata = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit'
})

let newYork = new Intl.DateTimeFormat("en-US", {
    timeZone : "America/New_York",
    weekday : "long",
    year : "numeric",
    month : "long",
    day : "numeric",
    hour : "2-digit",
    minute : '2-digit',
    second : "2-digit"
})

console.log("Kolkate : ", kolkata.format(new Date()))
console.log("New York : ", newYork.format(new Date()))