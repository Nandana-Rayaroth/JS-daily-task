
function Unique(str) {

    let sample = str.split("")
    let temp = []

    temp = [...new Set(sample)]
    return temp.join("")
}

console.log(Unique('apple'))

// 