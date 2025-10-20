
function totalSum(...arr) {
    let temp = [...arr]
    let result = temp.reduce((acc, curr) => acc + curr, 0)
    return result
}


console.log(totalSum(1, 2, 3, 4))

// 