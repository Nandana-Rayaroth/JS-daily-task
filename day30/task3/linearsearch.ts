export function LinearSearch(arr :number[] , item: number) : string{
    if(arr.length === 0) return "Invalid input"
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return `Value ${item} found at index ${i}`
        }
    }
    return `Value ${item} is not found`
}

// console.log(LinearSearch([7, 12, 9, 11, 3], 11));
// console.log(LinearSearch([81, 54, 32, 1, 98, 43], 43));
// console.log(LinearSearch([81, 54, 32, 1, 98, 43], 100));