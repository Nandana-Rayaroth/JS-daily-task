export function MostFrq(arr : number[]){
    let frq = {}
    for(let i: number = 0; i < arr.length; i++){
        if(arr[i] in frq){
            frq[arr[i]]++
        }else{
            frq[arr[i]] = 1
        }
    }
    let Val:number[] = Object.values(frq)
    let max:number = Math.max(...Val)
    let Key: string[] = Object.keys(frq)
    let item = Key.find((element) => frq[element] === max)
    return Number(item)
}

// console.log(MostFrq([1, 2, 2, 3, 3, 3, 4]))