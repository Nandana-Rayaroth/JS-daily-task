export function RemoveFalsy<T>(arr : T[]) : T[] | string{
    if(arr.length === 0) return "Invalid input"
    let temp = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            temp.push(arr[i])
        }
    }
    return temp
}

// console.log(RemoveFalsy([1, 0, 2, "", 3, null, 4]))

