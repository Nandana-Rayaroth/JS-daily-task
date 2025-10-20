
function sumOfDigits(n) {

    let temp = [n]
    let splitted = temp.toString().split("")
    let sum = 0 
    for(let i = 0; i < splitted.length; i++) {
        sum = sum + Number(splitted[i])
    }
    console.log(sum)
    
}

sumOfDigits(300)