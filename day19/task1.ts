export function DetectSymmetry(arr:number[][]){
    let result:object = {}
    let hr:number[] = []
    let hrFlag:boolean = true
    let vr:number[] = []
    let vrFlag:boolean = true
    let dgFirst:number[] = []
    let dgFlag:boolean = true

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length !== arr.length) return 'Invalid input'
    }

    for(let i:number = 0; i < arr[0].length; i++){
        hr.push(arr[0][i])
    }
    for(let i:number = 0; i < arr[arr.length - 1].length; i++){
        if(arr[arr.length-1][i] !== hr[i]) hrFlag = false
    }
    
    for(let i:number = 0; i < arr.length; i++){
        for(let j:number = 0; j <= 0; j++){
            vr.push(arr[i][j])
        }
    }
    for(let i:number = 0; i < arr.length; i++){
        for(let j:number = arr[i].length - 1; j <= arr[i].length-1; j++){
            if (arr[i][j] !== vr[i]) vrFlag = false
        }
    }
    for(let i:number = 0; i < arr.length; i++){
        for(let j:number = i; j >= i; j--){
            dgFirst.push(arr[i][arr.length-(j+1)])
        }
    }
    for(let i:number = 0; i <= arr.length-1; i++){
        if(dgFirst[i]!==dgFirst[dgFirst.length-1-i]) dgFlag=false
    }
    result.horizontal=hrFlag
    result.vertical=vrFlag
    result.diagonal=dgFlag
    return(result)
}