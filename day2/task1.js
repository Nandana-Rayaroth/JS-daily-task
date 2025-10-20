
function isPrime(n) {
    let flag = 0
    if(n <= 1){
        console.log("Enter valid number")
    }
    else{
        for(let i = 1; i <= n; i++) {
            if(n % i === 0) {
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

isPrime(29)

// 