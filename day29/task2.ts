export function Rotate(arr : number[], k: number){
    if(k > arr.length || k < 0) return "Invalid input"
    if(!Number.isInteger(k)) return "Invalid input"

    let firsthalf : number[] = arr.slice(k+1)
    let secondhalf: number[] = []
    for(let i : number = 0; i <= k; i++){
        secondhalf.push(arr[i])
    }
    let result : number[] = [...firsthalf, ...secondhalf]
    return(result);
}

// Rotate([1, 2, 3, 4, 5], 2)
// Rotate([2, 4, 65, 76, 23, 6, 5], 3)
// Rotate([32, 31, 54, 65, 76, 86 ,763, 53], 6)