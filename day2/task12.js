
function largeItems(inp) {
    let arr = inp.sort()
    let firstMax = arr[0]
    let secondMax = arr[arr.length-2]
    let thirdmax = arr[arr.length-3]
    let temp 
    let product

    for(let i = 0; i < arr.length; i++) {
        if(firstMax < arr[i]) {
            firstMax = arr [i]
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(secondMax <= arr[i]) {
            if (arr[i] < firstMax) {
              secondMax = arr[i];
            } else if (secondMax > firstMax) {
              secondMax = temp;
              temp = firstMax;
            }
        }

    }

    for(let i = 0; i < arr.length; i++) {
        if(thirdmax <= arr[i]){
            if (arr[i] < secondMax) {
              thirdmax = arr[i];
            } else if (thirdmax > secondMax) {
              thirdmax = temp;
              temp = secondMax;
            }
        }

    }

    product = firstMax * secondMax * thirdmax
    return product

}

const inputArray = [1, 2, 3, 4];
console.log(largeItems(inputArray))

// 
