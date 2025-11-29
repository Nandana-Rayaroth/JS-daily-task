export function AnalyzeHeatmap(heatmap : number[][]){
    let arr = [...heatmap]
    let maxArr = []
    let maxVal
    let minArr = []
    let minVal 
    let sum : number[] = arr.flat(Infinity)
    let avg = (sum.reduce((acc, curr) => acc+curr, 0))/sum.length
    avg = Number(parseFloat(avg).toFixed(1))
    let obj : {maxTemp : number, minTemp : number, averageTemp : number, hottestPoint: number[], coldestPoint: number[]} = {}

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length === 0) return "Invalid input"
        maxArr.push((Math.max(...arr[i])))
        minArr.push((Math.min(...arr[i])))
    }
    maxVal = Math.max(...maxArr)
    obj.maxTemp = maxVal
    minVal = Math.min(...minArr)
    obj.minTemp = minVal
    obj.averageTemp = avg
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === maxVal) obj.hottestPoint = [i, j]
        }
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === minVal) obj.coldestPoint = [i, j];
        }
    }
    return obj
}

// console.log(AnalyzeHeatmap([[12, 43, 45], [23, 65, 6], [54, 23], []]));
// console.log(AnalyzeHeatmap([[]]))