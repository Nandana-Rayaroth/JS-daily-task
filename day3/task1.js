
function Total(arr) {
    let temp = []
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        temp[i] = Number(arr[i].join(""))
        result = result + temp[i]
    }
    return result;
}

console.log(Total([[1, 2, 3], [0, 7]]))

// 