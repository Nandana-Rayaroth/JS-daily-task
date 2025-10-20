let numArray = [1, 2, false, 0, '']

function removeFalsy(arr) {
    let newArr = arr.filter((item) => (item != 0 && item != false && item != '' && item != null && item != undefined && item != NaN))
    console.log(newArr)
}

removeFalsy(numArray)

// 