function Arrange(arr, row, col){
    let temp = []
    for(let i = 0; i < row; i++){
        let rowSet = []
        for(let j = 0; j < col; j++){
            rowSet.push(1)
        }
        temp.push(rowSet)
    }
    // console.log(temp)
    let Ind = 0
    let colWise = 0
    for(let k = 0; k < col; k++){
      for (let i = 0; i < row; i++) {
        for (let j = 0; j <= i; j++) {
          if(colWise%2 === 0){
          temp[i][colWise] = arr[Ind];

          }
          else{
            
          }
        }
        Ind++;
      }
      colWise++;
    }

    let IndBottom = row - 1
    let bottom = row-1
    for(let k = 0; k < col; k++){
        
        for(let i = row - 1; i >= 0; i--){
            
            for(let j = 1; j < col; j++){
                
                if(bottom%2 !== 0){
                    temp[i][bottom] = arr[IndBottom]
                }
            }
            IndBottom++
        }
    }
    
    console.log(temp)
    
}

Arrange([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4)