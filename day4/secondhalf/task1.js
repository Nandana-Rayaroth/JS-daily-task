function Spiral(n) {

    // let sample = []

    // let val = 1
    // for(let i = 0; i < n; i++){
    //     for(let j = 0; j < n; j++) {
            
    //         if(i < n) {  
    //             // console.log(val); 
    //             if(val <= n)
    //             sample.push(val)
    //             val++;
    //         }
          
    //     }
    //     // return val        
    // }
    // return sample
    const matrix = Array.from({length: n}, () => Array(n).fill(0))
    r
    let num = 1
    let top = 0
    let bottom = n-1
    let left = 0
    let right = n-1

    while(num <= n * n) {
        for(let i = left; i <= right; i++) {
            matrix[top][i] = num++
        }
        top++
        for(let i = top; i <= bottom; i++) {
            matrix[i][right] = num++
        }
        right--
        for(let i = right; i >= left; i--) {
            
        }
    }
}

console.log(Spiral(3))