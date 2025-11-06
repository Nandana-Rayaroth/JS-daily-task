function spiralOrder(n){
    let temp = []
    
      for (let i = 0; i < n; i++) {
        let arr = [];
        let num = 0
        for (let j = 0; j < n; j++) {
          arr[j] = num + 1
          num++
        }
        temp.push(arr)
      }
    let col = n+1
    // console.log(col)
    for(let i = 1; i < n; i++){
        for(let j = 1; j < n; j++){
            if(j===n-1){
                temp[i][j] = col
            }
        }
        col= col + 1
    }

    for(let i = n-1; i >= 0; i--){
        if(i===n-1){
          for (let j = n - 2; j >= 0; j--) {
            temp[i][j] = col;
            col = col + 1;
          }
        }
        
    }
    
    
    for(let i = n-2; i > 0; i--){
        for(let j = 0; j < n; j++){
            if(j===0){
                temp[i][j] = col
                col = col+1
            }
        }
    }
    
    // console.log(col);
    // for(let i = n-2; i > 0; i--){
    //     for(let j=1; j<n-1; j++){
    //         // if(j===1){
    //             temp[i][j] = col
    //             col=col+1
    //         // }
    //     }
    // }
    for(let i = 1; i < n-1; i++){
        if(i === 1){
            for(let j = 1; j < n-1; j++){
                temp[i][j] = col
                col = col + 1
            }
        }
    }
    
    console.log(temp);

}
spiralOrder(3)
// spiralOrder(4)