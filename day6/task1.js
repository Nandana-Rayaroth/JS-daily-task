
function Rearrange(arr) {

    let temp = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            temp.push(arr[i])
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            temp.push(arr[i])
        }
    }
    console.log(temp)
}

Rearrange([3, 2, 4, 1, 5, 8])
Rearrange([4, 8, 1, 8, 5, 2])

// 