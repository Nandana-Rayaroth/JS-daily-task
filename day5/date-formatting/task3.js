
const now = new Date()
const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short"
})

const formatted = formatter.format(now)
console.log(formatted)