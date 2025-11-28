export function SelectionSort(arr : number[]){
    if(arr.length === 0) return "Invalid input"
    let sample : number[] = [...arr]
    let result : number[] = []
    for(let i : number = 0; i < arr.length; i++){ 
        let min : number = Math.min(...sample);
        result.push(min)
        sample.splice(sample.lastIndexOf(min), 1)
    }
    return result
}