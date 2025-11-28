export function GetPrime(n : number) : string | number[]{
    if(!Number.isInteger(n) || n <= 0) return "Invalid input"
    let temp : number[] = []
    let prime : number[] = []
    for(let i = 2; i <= n * n; i++){
        temp.push(i)
    }
    let Length : number = temp.length
    for(let i : number = 0; i < Length; i++){
        let item : number = temp[0]
        for(let j : number = 0; j < Length; j++){
            let div : number = temp[j] % item
            if(div === 0){
                temp.splice(j, 1)
            }
        }
        if(item && prime.length < n) prime.push(item)
    }
    return(prime)
}
