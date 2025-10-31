function Replace(arr1, arr2, positin) {
    let temp = []
    let flatted = []
    
    for(let i = 0; i < arr1.length; i++){
        if(positin-1 === i){
            temp.push(arr1[i])
            temp[i + 1] = arr2
        }
        else{
            temp.push(arr1[i]);
        }
    }
    flatted = temp.flat()
    return(flatted)
}

console.log(Replace([1, 2, 3], [4, 5, 6], 2))

// 