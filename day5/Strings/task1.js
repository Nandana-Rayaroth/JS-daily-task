
let str1 = ' Hello, World! '

function modified(str) {
    let trimmed = str.trim()
    let punchRemove = trimmed.replace(/[!, ,., ', @, *, &, $, #, %]/g, "").toLowerCase()
    console.log(punchRemove)

}

modified(str1)



