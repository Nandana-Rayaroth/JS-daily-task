function totalSum(...arr : number[]) {
    let result : number  = 0
    for(let i of arr){
        result = result + i
    }
    console.log(result)
}

totalSum(1,2,3,4)
totalSum(1,2)