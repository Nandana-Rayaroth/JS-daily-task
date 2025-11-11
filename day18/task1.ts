function LastTen(n: number){

    let sum: number[] = []
    let arr: number
    for(let i : number = 1; i <= n; i++){
        sum.push(Math.pow(i, i))
    }
    arr = (sum.reduce((acc, curr) => acc + curr, 0))
    console.log(arr%10000000000)

}

LastTen(10)
// Not completed

