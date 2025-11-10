function PrimeFactors(num: number){
    let prime : number[] = []
    let fact : number[] = []
    for(let i:number = 2; i < num; i ++){
        if(num % i === 0){
            fact.push(i)
            let flag: number = 0
            for(let j:number = 1; j <= num; j++){
                if(i % j === 0) flag = flag + 1
            }
            if(flag <= 2){
                prime.push(i)
            }
        }
    }
    return (Math.max(...prime))
    
}

console.log(PrimeFactors(13195))
// console.log(PrimeFactors(600851475143))