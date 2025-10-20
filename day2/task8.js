
function missingFinder(arr) {
    let counter = arr[0]
    let starter = 1
    if(counter - 1 === starter && (!arr.includes(starter))) {
        return starter
    }

    for(let i = 0; i < arr.length; i++) {
        counter = counter + 1
        if(!arr.includes(counter)){
            return counter
        }
    }
}

console.log(missingFinder([2, 3, 4, 5, 6]))

// 
