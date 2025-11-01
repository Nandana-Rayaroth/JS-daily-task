
function BalancedParentheses(n){

    if(n <= 0 || typeof(n) !== "number") return "Invalid input"

    let temp = []
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < i; j++){
            temp.push("()")
        }
    }
    console.log(temp)
    
}

BalancedParentheses(1)