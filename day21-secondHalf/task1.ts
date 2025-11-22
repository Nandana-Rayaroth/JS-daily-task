function findLongestChain(arr : number[]){
    let sample : number[] = [...arr]
    sample.sort((a:number, b: number) => a-b)
    for(let i: number = 0; i < sample.length; i++){
        let Ind: number = arr.indexOf(sample[i])
        let temp:number[] = []
        for(let j: number = Ind; j < sample.length; j++){
            if(sample[j] > sample[i]) temp.push(sample[j])
               
        }
        console.log(temp);
    }
}

findLongestChain([5, 1, 2, 3, 0, 4, 6])
