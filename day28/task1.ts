export function UniqArr(arr: number[] | string[]){

    let temp:number[] | string[] = []
    for(let i:number = 0; i < arr.length; i++){
        if(!temp.includes(arr[i])){
            temp.push(arr[i])
        }
    }
    return(temp)
}

// console.log(UniqArr([3, 34, 12, 54, 3, 12, 54]))
// console.log(UniqArr(["a", "b" , "a"]))