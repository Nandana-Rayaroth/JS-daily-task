function Combination(n, k){
    let temp = []

    for(let i = 0; i < n+k; i++){
        let sample = []
        for(let j = 0; j < k; j++){
            sample[j] = i, j 
        }
        if(sample.length !== 0){
            temp.push(sample)
        }
    }
    console.log(temp)
}

Combination(4, 2)