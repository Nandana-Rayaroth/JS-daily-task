export function findSortType(arr :number[]){
    if(arr.length === 0) return "Invalid input"
    let ascend : number[] = [...arr]
    ascend = ascend.sort((a, b) => a - b);
    let descend : number[] = [...arr]
    descend = descend.sort((a, b) => b - a)
    let ascendFlag : boolean = true
    let descendFlag : boolean = true

    for(let i : number = 0; i < arr.length; i++){
        if(ascend[i] !== arr[i]) ascendFlag = false
        if(descend[i] !== arr[i]) descendFlag = false
    }
    if(ascendFlag) return "ascending"
    if(descendFlag) return "descending"
    if(!ascendFlag && !descendFlag) return "Unsorted"
}
