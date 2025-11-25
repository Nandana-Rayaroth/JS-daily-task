export function Intersection<T>(arr1 : T[], arr2 : T[]){

    if(arr1.length === 0 || arr2.length === 0) return 'Invalid input'

    let small= arr1.length > arr2.length ? arr2 : arr1
    let large = arr1.length > arr2.length ? arr1 : arr2
    let temp = []
    
    for(let i = 0; i < large.length; i++){
        if(typeof(large[i]) !== 'string' && typeof(large[i]) !== 'number') return "Invalid input"
        if(typeof(large[i]) === 'string' && large[i].trim() === "") return "Invalid input"
    }

    for(let i = 0; i < small.length; i++){
        if(typeof(small[i]) === 'string' && small[i].trim() === "") return "Invalid input"
        if(large.includes(small[i])){
            temp.push(small[i])
        }
    }
    if(temp.length !== 0) return temp
    else return "There is no intersection exist"
}

// console.log(Intersection([1, 2, 3], [2, 3, 4]))
// console.log(Intersection(["hello", "hi", "now"], ["hi", "hello"]))
// console.log(Intersection([null, 3,34], [23,54]))
// console.log(Intersection([1, 2, 3], [5, 6, 7]))