
function getTranspose(mtx){

    let row = mtx.length
    let column = mtx[0].length
    let rowItem = []
    
    for(let i = 0; i < column; i++){
        let temp = []
        for(let j = 0; j < row; j++) {
            
            temp.push(mtx[j][i])
        }
        rowItem.push(temp)
    }
    console.log(rowItem)
    
}

getTranspose([
    [2, 9, 0], 
    [7, 1, 5],
])

// const TestCase = [
//     {
//         id : 1,
//         input : [[2, 9, 0] [7, 1, 5]],
//         output : [ [2, 7], [9 , 1], [0, 5]]
//     }
// ]
// TestCase.forEach(({input, output}) => {
//     let result = getTranspose(input)
//     if(result === output) console.log("Passed")
//     else console.log("Failed")
// })
// 