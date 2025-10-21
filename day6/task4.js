
function patternPrinter(n) {
    let temp = []

    for(let i = 65; i <= 90; i++){
        temp.push(String.fromCharCode(i))
    }
    for(let i = 0; i < n; i++) {
        console.log(temp[i].repeat(i+1).split('').join(" "))
    }
}

patternPrinter(5)

// 