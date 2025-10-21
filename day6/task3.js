
function FindOut(arr) {
    let sorted = arr.sort((a,b) => a - b)
    let missing 
    let count = sorted[0]
    for(let i = 0; i < arr.length; i++) {
        if(count !== sorted[i]){
            missing = count
        }
        else{
            count = count + 1;
        }
    }
    console.log(missing)
}

FindOut([2, 3, 4, 6])
FindOut([1, 2, 4, 5])

// 