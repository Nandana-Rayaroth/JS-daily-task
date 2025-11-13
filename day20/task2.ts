export function AnalyzeHeatmap(heatmap:number[][]){

    let arr: number[] = []
    let result: {maxTemp: number, minTemp: number, averageTemp: number, hottestPoint: number[], coldestPoint: number[]} = {maxTemp: 0, minTemp: 0, averageTemp: 0, hottestPoint: [0,0], coldestPoint: [0,0]}

    let avgT
    let htP = []
    let cldP = []
    for(let i = 0; i < heatmap.length; i++){
        for(let j = 0; j < heatmap[i].length; j++){
            arr.push(heatmap[i][j])
        }
    }
    if(arr.length === 0) return 'Invalid input'
    let maxT:number = Math.max(...arr);
    let minT:number = Math.min(...arr);
    
    for(let i = 0; i < heatmap.length; i++){
        for(let j = 0; j < heatmap[i].length; j++){
            if (htP.length === 2) break;
            if(maxT === heatmap[i][j]){ 
                htP.push(i, j)
            }
            
        }
    }
    for (let i = 0; i < heatmap.length; i++) {
      for (let j = 0; j < heatmap[i].length; j++) {
        if (cldP.length === 2) break;
        if (minT === heatmap[i][j]) {
            cldP.push(i, j)   
        }
        
      }
    }


    avgT = arr.reduce((acc, curr) => acc+curr, 0)
    avgT = Number((avgT/arr.length).toFixed(1))

    result.maxTemp = maxT,result.minTemp = minT,result.averageTemp = avgT,result.hottestPoint = htP,result.coldestPoint = cldP
    return(result)
}

// console.log(AnalyzeHeatmap([[30, 32, 35], [28, 40, 33], [31, 36, 38]]))
// console.log(AnalyzeHeatmap([[30, 28, 35], [28, 40, 33], [31, 36, 38]]))
// console.log(AnalyzeHeatmap([[40, 32, 35], [28, 40, 33], [31, 36, 38]]))
// console.log(AnalyzeHeatmap([[40, 32, 35], [28, 40, 33], [31, 28, 38]]))