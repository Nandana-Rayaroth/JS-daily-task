
function flatArray(arr) {
    return arr.flat(Infinity)
}

console.log(flatArray([1, 2, [3, [4]], 5]))

// 