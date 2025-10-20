
function SumofDiviser(arr) {
    let sample = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0) {
            sample.push(arr[i])
        }
    }
    let result = sample.reduce((acc, curr) => acc + curr, 0)
    return result
}

console.log(SumofDiviser([10, 20, 30, 40, 50]))

// 