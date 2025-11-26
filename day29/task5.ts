export function UniqueSum(arr: number[]){

    let unique : number[] = []
    for(let i = 0; i < arr.length; i++){
        let lastInd : number = arr.lastIndexOf(arr[i])
        let firstInd : number = arr.indexOf(arr[i])
        if(lastInd === firstInd) unique.push(arr[i])
    }
    let sum : number = unique.reduce((acc, curr) => acc+curr, 0)
    return sum
}

// console.log(UniqueSum([1, 2, 3, 2]))
