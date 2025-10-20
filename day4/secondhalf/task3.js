
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

// 