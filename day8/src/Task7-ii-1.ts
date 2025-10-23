function isPrime(a : number) : void {
    let flag : number = 0
    if(a <= 1){
        console.log("Enter a valid number")
    }
    else{
        for(let i : number = 1; i <= a; i++){
            if(a % i === 0) {
                flag = flag + 1
            }
        }
        if(flag > 2) {
            console.log("False")
        }
        else{
            console.log("True")
        }
    }
}

isPrime(7)
isPrime(10)
isPrime(29)